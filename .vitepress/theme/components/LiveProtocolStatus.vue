<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import {
  productionProtocolStatus,
  type StakingReadiness,
} from "../../data/contracts";

const MAX_OBSERVATION_AGE_MS =
  productionProtocolStatus.maxObservationAgeSeconds * 1_000;
const MAX_FUTURE_CLOCK_SKEW_MS = 30_000;
const REFRESH_INTERVAL_MS = 30_000;
const CLOCK_TICK_MS = 1_000;
const REQUEST_TIMEOUT_MS = 8_000;

const READINESS_VALUES = new Set<StakingReadiness>([
  "ready",
  "pending-reward-pool",
  "pending-trading-open",
  "pending-safe-config",
  "unsafe-safe-policy",
  "not-ready",
]);
const AVAILABILITY_VALUES = new Set(["open", "closed", "limited", "unknown"]);
const TECHNICAL_READINESS_VALUES = new Set(["ready", "blocked", "unknown"]);

interface TokenValue {
  wei: string;
  gcat: string;
}

interface LiveStatus {
  schemaVersion: string;
  observedAt: string;
  observedAtMs: number;
  validUntil: string;
  validUntilMs: number;
  blockNumber: string;
  blockHash: string;
  readiness: StakingReadiness;
  canStakeNow: boolean;
  tradingOpened: boolean;
  tradingAvailability: string;
  stakingAvailability: string;
  rewardPoolMeetsMinimum: boolean;
  rewardPool: TokenValue;
  minRewardPool: TokenValue;
}

type LoadState = "checking" | "current" | "unavailable";

const loadState = ref<LoadState>("checking");
const status = ref<LiveStatus | null>(null);
const errorMessage = ref(
  "Waiting for a validated production status observation.",
);
const nowMs = ref(Date.now());
let requestController: AbortController | null = null;
let refreshTimer: ReturnType<typeof setInterval> | undefined;
let clockTimer: ReturnType<typeof setInterval> | undefined;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredBoolean(
  record: Record<string, unknown>,
  key: string,
): boolean {
  const value = record[key];
  if (typeof value !== "boolean") {
    throw new Error(`Status field ${key} is not a boolean.`);
  }
  return value;
}

function requiredString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Status field ${key} is not a non-empty string.`);
  }
  return value;
}

function sameAddress(actual: unknown, expected: string): boolean {
  return (
    typeof actual === "string" &&
    /^0x[0-9a-fA-F]{40}$/.test(actual) &&
    actual.toLowerCase() === expected.toLowerCase()
  );
}

function parseBlockNumber(value: unknown): string {
  if (typeof value === "string" && /^[1-9]\d*$/.test(value)) {
    return value;
  }
  throw new Error(
    "Status field blockNumber is not a positive decimal block number.",
  );
}

function parseTokenValue(value: unknown, key: string): TokenValue {
  if (!isRecord(value)) {
    throw new Error(`Status field ${key} is not an object.`);
  }
  const wei = requiredString(value, "wei");
  const gcat = requiredString(value, "gcat");
  if (!/^\d+$/.test(wei) || !/^\d+(?:\.\d{1,18})?$/.test(gcat)) {
    throw new Error(`Status field ${key} contains an invalid token amount.`);
  }
  const weiValue = BigInt(wei);
  const divisor = 10n ** 18n;
  const whole = weiValue / divisor;
  const fraction = (weiValue % divisor)
    .toString()
    .padStart(18, "0")
    .replace(/0+$/, "");
  const derivedGcat = fraction ? `${whole}.${fraction}` : whole.toString();
  if (gcat !== derivedGcat) {
    throw new Error(`Status field ${key}.gcat conflicts with its wei value.`);
  }
  return { wei, gcat };
}

function parseStatus(payload: unknown): LiveStatus {
  if (
    !isRecord(payload) ||
    payload.success !== true ||
    !isRecord(payload.data)
  ) {
    throw new Error("The production status response has an invalid envelope.");
  }

  const data = payload.data;
  const validationNowMs = Date.now();
  const schemaVersion = requiredString(data, "schemaVersion");
  if (
    !/^\d+\.\d+\.\d+$/.test(schemaVersion) ||
    schemaVersion.split(".")[0] !==
      productionProtocolStatus.schemaVersion.split(".")[0]
  ) {
    throw new Error("The production status schema version is not supported.");
  }
  if (data.chainId !== productionProtocolStatus.expectedChainId) {
    throw new Error("The production status response is not for Base mainnet.");
  }

  if (!isRecord(data.release)) {
    throw new Error("Status field release is not an object.");
  }
  const releaseId = requiredString(data.release, "id");
  if (releaseId !== productionProtocolStatus.expectedReleaseId) {
    throw new Error(
      "The production status release does not match the published Base registry.",
    );
  }
  if (
    requiredString(data.release, "registryUpdatedAt") !==
      productionProtocolStatus.expectedRegistryUpdatedAt ||
    requiredString(data.release, "deploymentStatus") !==
      productionProtocolStatus.expectedDeploymentStatus ||
    requiredString(data, "deploymentStatus") !==
      productionProtocolStatus.expectedDeploymentStatus ||
    data.release.deploymentStatus !== data.deploymentStatus
  ) {
    throw new Error(
      "The production release metadata conflicts with the published Base registry.",
    );
  }

  if (!isRecord(data.addresses)) {
    throw new Error("Status field addresses is not an object.");
  }
  for (const [key, expected] of Object.entries(
    productionProtocolStatus.expectedAddresses,
  )) {
    const actual = requiredString(data.addresses, key);
    if (actual.toLowerCase() !== expected.toLowerCase()) {
      throw new Error(
        `Status address ${key} conflicts with the published Base registry.`,
      );
    }
  }

  const observedAt = requiredString(data, "observedAt");
  const observedAtMs = Date.parse(observedAt);
  if (!Number.isFinite(observedAtMs)) {
    throw new Error("Status field observedAt is not a valid ISO timestamp.");
  }

  const validUntil = requiredString(data, "validUntil");
  const validUntilMs = Date.parse(validUntil);
  if (
    !Number.isFinite(validUntilMs) ||
    validUntilMs <= observedAtMs ||
    validUntilMs - observedAtMs > MAX_OBSERVATION_AGE_MS
  ) {
    throw new Error(
      "Status field validUntil is invalid or precedes observedAt.",
    );
  }

  const observationAgeMs = validationNowMs - observedAtMs;
  if (observationAgeMs < -MAX_FUTURE_CLOCK_SKEW_MS) {
    throw new Error(
      "The production status observation is unexpectedly in the future.",
    );
  }
  if (observationAgeMs > MAX_OBSERVATION_AGE_MS) {
    throw new Error(
      `The production status observation is older than ${productionProtocolStatus.maxObservationAgeSeconds} seconds.`,
    );
  }
  if (validationNowMs >= validUntilMs) {
    throw new Error("The production status observation has expired.");
  }

  if (!isRecord(data.observation)) {
    throw new Error("Status field observation is not an object.");
  }
  const observationMaxAgeSeconds = data.observation.maxAgeSeconds;
  if (
    requiredString(data.observation, "source") !== "base-mainnet-rpc" ||
    typeof observationMaxAgeSeconds !== "number" ||
    !Number.isInteger(observationMaxAgeSeconds) ||
    observationMaxAgeSeconds <= 0 ||
    observationMaxAgeSeconds * 1_000 > MAX_OBSERVATION_AGE_MS
  ) {
    throw new Error("Status observation metadata is not recognized.");
  }
  const blockTimestamp = requiredString(data.observation, "blockTimestamp");
  const blockTimestampMs = Date.parse(blockTimestamp);
  if (
    !Number.isFinite(blockTimestampMs) ||
    validationNowMs - blockTimestampMs > MAX_OBSERVATION_AGE_MS ||
    blockTimestampMs > validationNowMs + MAX_FUTURE_CLOCK_SKEW_MS ||
    observedAtMs - blockTimestampMs > MAX_OBSERVATION_AGE_MS ||
    observedAtMs - blockTimestampMs < -MAX_FUTURE_CLOCK_SKEW_MS
  ) {
    throw new Error(
      "The latest Base block timestamp is stale or unexpectedly in the future.",
    );
  }
  if (validUntilMs > blockTimestampMs + observationMaxAgeSeconds * 1_000) {
    throw new Error(
      "Status field validUntil extends past the observed block freshness window.",
    );
  }

  const blockHash = requiredString(data, "blockHash");
  if (!/^0x[0-9a-fA-F]{64}$/.test(blockHash)) {
    throw new Error("Status field blockHash is not a 32-byte hex value.");
  }

  const readiness = requiredString(data, "readiness") as StakingReadiness;
  if (!READINESS_VALUES.has(readiness)) {
    throw new Error("Status field readiness is not recognized.");
  }

  const canStakeNow = requiredBoolean(data, "canStakeNow");
  const deploymentStatus = requiredString(data, "deploymentStatus");
  const stakingCoreReady = requiredBoolean(data, "stakingCoreReady");
  const phase1Configured = requiredBoolean(data, "phase1Configured");
  const safePolicyReady = requiredBoolean(data, "safePolicyReady");
  const tokenTransfersOpen = requiredBoolean(data, "tokenTransfersOpen");
  const rewardPoolFunded = requiredBoolean(data, "rewardPoolFunded");
  const rewardPoolMeetsMinimum = requiredBoolean(
    data,
    "rewardPoolMeetsMinimum",
  );
  const rewardPool = parseTokenValue(data.rewardPool, "rewardPool");
  const minRewardPool = parseTokenValue(data.minRewardPool, "minRewardPool");
  const calculatedPoolGate =
    BigInt(rewardPool.wei) >= BigInt(minRewardPool.wei);
  if (BigInt(minRewardPool.wei) < 1_000_000n * 10n ** 18n) {
    throw new Error(
      "The minimum reward pool is below the published policy floor.",
    );
  }
  if (!Array.isArray(data.evidence) || data.evidence.length === 0) {
    throw new Error(
      "Status field evidence must contain at least one public evidence item.",
    );
  }

  if (!isRecord(data.capabilities)) {
    throw new Error("Status field capabilities is not an object.");
  }
  const tradingCapability = data.capabilities.trading;
  const stakingCapability = data.capabilities.staking;
  if (!isRecord(tradingCapability) || !isRecord(stakingCapability)) {
    throw new Error("Status capability payload is invalid.");
  }
  const tradingDeclaredAvailability = requiredString(
    tradingCapability,
    "declaredAvailability",
  );
  const stakingDeclaredAvailability = requiredString(
    stakingCapability,
    "declaredAvailability",
  );
  const tradingTechnicalReadiness = requiredString(
    tradingCapability,
    "technicalReadiness",
  );
  const stakingTechnicalReadiness = requiredString(
    stakingCapability,
    "technicalReadiness",
  );
  const tradingAvailability = requiredString(
    tradingCapability,
    "effectiveAvailability",
  );
  const stakingAvailability = requiredString(
    stakingCapability,
    "effectiveAvailability",
  );
  if (
    !AVAILABILITY_VALUES.has(tradingDeclaredAvailability) ||
    !AVAILABILITY_VALUES.has(stakingDeclaredAvailability) ||
    tradingDeclaredAvailability === "unknown" ||
    stakingDeclaredAvailability === "unknown" ||
    !TECHNICAL_READINESS_VALUES.has(tradingTechnicalReadiness) ||
    !AVAILABILITY_VALUES.has(tradingAvailability) ||
    !AVAILABILITY_VALUES.has(stakingAvailability) ||
    !TECHNICAL_READINESS_VALUES.has(stakingTechnicalReadiness)
  ) {
    throw new Error("Status capability availability is not recognized.");
  }
  const deriveEffectiveAvailability = (declared: string, technical: string) => {
    if (technical === "unknown") return "unknown";
    if (declared === "closed" || technical === "blocked") return "closed";
    return declared;
  };
  if (
    tradingAvailability !==
      deriveEffectiveAvailability(
        tradingDeclaredAvailability,
        tradingTechnicalReadiness,
      ) ||
    stakingAvailability !==
      deriveEffectiveAvailability(
        stakingDeclaredAvailability,
        stakingTechnicalReadiness,
      )
  ) {
    throw new Error(
      "Status capability effective availability is internally inconsistent.",
    );
  }
  const contractCallable = requiredBoolean(
    stakingCapability,
    "contractCallable",
  );
  const officialUiPolicyEnabled = requiredBoolean(
    stakingCapability,
    "officialUiPolicyEnabled",
  );
  const rewardPoolHealthy = requiredBoolean(
    stakingCapability,
    "rewardPoolHealthy",
  );
  const payoutAccountingHealthy = requiredBoolean(
    stakingCapability,
    "payoutAccountingHealthy",
  );
  if (
    requiredString(stakingCapability, "contractAccess") !== "permissionless"
  ) {
    throw new Error("The staking contract access policy is not recognized.");
  }

  if (calculatedPoolGate !== rewardPoolMeetsMinimum) {
    throw new Error(
      "The reward-pool value conflicts with rewardPoolMeetsMinimum.",
    );
  }
  if (BigInt(rewardPool.wei) > 0n !== rewardPoolFunded) {
    throw new Error("The reward-pool value conflicts with rewardPoolFunded.");
  }
  if (
    canStakeNow !==
    (readiness === "ready" &&
      stakingTechnicalReadiness === "ready" &&
      stakingAvailability === "open")
  ) {
    throw new Error(
      "The technical readiness, effective availability, and canStakeNow fields conflict.",
    );
  }
  if (
    officialUiPolicyEnabled !== canStakeNow ||
    rewardPoolHealthy !== rewardPoolMeetsMinimum ||
    (canStakeNow &&
      (!contractCallable ||
        payoutAccountingHealthy !== true ||
        stakingAvailability !== "open"))
  ) {
    throw new Error(
      "The staking capability decision conflicts with its readiness gates.",
    );
  }
  if (
    canStakeNow &&
    (deploymentStatus !== "active" ||
      !stakingCoreReady ||
      !phase1Configured ||
      !safePolicyReady ||
      !tokenTransfersOpen ||
      !rewardPoolMeetsMinimum)
  ) {
    throw new Error(
      "The open staking decision conflicts with one or more readiness gates.",
    );
  }

  const checkNames = [
    "chainIdMatchesBase",
    "contractsConfigured",
    "stakingTokenMatchesGcat",
    "coreLinksToStaking",
    "stakingLinksToCore",
    "stakingLinksToNft",
    "tradingOpened",
    "rewardPoolFunded",
    "rewardPoolMeetsMinimum",
    "payoutAccountingHealthy",
    "gamificationLinksToNft",
    "nftMinterAllowsGamification",
    "multisigMatchesSafe",
    "safeHasCode",
    "safeOwnerCountMeetsPolicy",
    "safeThresholdMeetsPolicy",
    "safeThresholdWithinOwners",
    "safePolicyReady",
  ] as const;
  if (!isRecord(data.checks)) {
    throw new Error("Status field checks is not an object.");
  }
  const checks = data.checks;
  for (const checkName of checkNames) {
    requiredBoolean(checks, checkName);
  }
  if (
    checks.tradingOpened !== tokenTransfersOpen ||
    checks.rewardPoolFunded !== rewardPoolFunded ||
    checks.rewardPoolMeetsMinimum !== rewardPoolMeetsMinimum ||
    checks.safePolicyReady !== safePolicyReady ||
    checks.payoutAccountingHealthy !== payoutAccountingHealthy
  ) {
    throw new Error(
      "Root readiness fields conflict with detailed status checks.",
    );
  }
  const calculatedCoreReady =
    checks.chainIdMatchesBase &&
    checks.contractsConfigured &&
    checks.stakingTokenMatchesGcat &&
    checks.coreLinksToStaking &&
    checks.stakingLinksToCore &&
    checks.stakingLinksToNft &&
    checks.multisigMatchesSafe;
  const calculatedPhase1Ready =
    calculatedCoreReady &&
    checks.gamificationLinksToNft &&
    checks.nftMinterAllowsGamification;
  if (
    stakingCoreReady !== calculatedCoreReady ||
    phase1Configured !== calculatedPhase1Ready
  ) {
    throw new Error(
      "Root wiring readiness conflicts with detailed status checks.",
    );
  }
  if (
    stakingTechnicalReadiness !==
      (readiness === "ready" ? "ready" : "blocked") ||
    tradingTechnicalReadiness !==
      (checks.chainIdMatchesBase &&
      deploymentStatus === "active" &&
      checks.tradingOpened
        ? "ready"
        : "blocked")
  ) {
    throw new Error(
      "Capability technical readiness conflicts with detailed status checks.",
    );
  }

  if (!isRecord(data.onchain)) {
    throw new Error("Status field onchain is missing or invalid.");
  }
  const onchain = data.onchain;
  if (onchain.rpcChainId !== productionProtocolStatus.expectedChainId) {
    throw new Error("The on-chain observation is not for Base mainnet.");
  }
  const expectedOnchainAddresses = {
    coreStakingContract: productionProtocolStatus.expectedAddresses.staking,
    stakingToken: productionProtocolStatus.expectedAddresses.gloveCatCore,
    stakingCoreContract:
      productionProtocolStatus.expectedAddresses.gloveCatCore,
    stakingNftContract: productionProtocolStatus.expectedAddresses.gloveCatNFT,
    coreMultiSig: productionProtocolStatus.expectedAddresses.safe,
    stakingMultiSig: productionProtocolStatus.expectedAddresses.safe,
    gamificationNftContract:
      productionProtocolStatus.expectedAddresses.gloveCatNFT,
    gamificationMultiSig: productionProtocolStatus.expectedAddresses.safe,
    nftMultiSig: productionProtocolStatus.expectedAddresses.safe,
  } as const;
  for (const [key, expected] of Object.entries(expectedOnchainAddresses)) {
    if (!sameAddress(onchain[key], expected)) {
      throw new Error(
        `On-chain address ${key} conflicts with the published Base registry.`,
      );
    }
  }

  const tradingOpened = requiredBoolean(onchain, "tradingOpened");
  const nftMinterAllowsGamification = requiredBoolean(
    onchain,
    "nftMinterAllowsGamification",
  );
  const safeHasCode = requiredBoolean(onchain, "safeHasCode");
  const onchainPool = requiredString(onchain, "stakingIncentivePool");
  const totalLocked = requiredString(onchain, "stakingTotalLocked");
  const stakingBalance = requiredString(onchain, "stakingTokenBalance");
  if (
    !/^\d+$/.test(onchainPool) ||
    !/^\d+$/.test(totalLocked) ||
    !/^\d+$/.test(stakingBalance) ||
    onchainPool !== rewardPool.wei
  ) {
    throw new Error(
      "The on-chain staking accounting values conflict with the status totals.",
    );
  }
  const calculatedPayoutGate =
    BigInt(stakingBalance) >= BigInt(totalLocked) + BigInt(onchainPool);
  if (
    tradingOpened !== tokenTransfersOpen ||
    nftMinterAllowsGamification !== checks.nftMinterAllowsGamification ||
    safeHasCode !== checks.safeHasCode ||
    calculatedPayoutGate !== payoutAccountingHealthy
  ) {
    throw new Error(
      "The on-chain evidence conflicts with the readiness checks.",
    );
  }

  if (
    !Array.isArray(onchain.safeOwners) ||
    onchain.safeOwners.length === 0 ||
    !onchain.safeOwners.every(
      (owner) => typeof owner === "string" && /^0x[0-9a-fA-F]{40}$/.test(owner),
    )
  ) {
    throw new Error("The on-chain Safe owner evidence is invalid.");
  }
  const normalizedOwners = onchain.safeOwners.map((owner) =>
    owner.toLowerCase(),
  );
  if (new Set(normalizedOwners).size !== normalizedOwners.length) {
    throw new Error("The on-chain Safe owner evidence contains duplicates.");
  }
  const safeThresholdRaw = requiredString(onchain, "safeThreshold");
  const safeNonce = requiredString(onchain, "safeNonce");
  if (!/^\d+$/.test(safeThresholdRaw) || !/^\d+$/.test(safeNonce)) {
    throw new Error("The on-chain Safe threshold or nonce is invalid.");
  }
  const safeThreshold = BigInt(safeThresholdRaw);
  const ownerCountGate = normalizedOwners.length >= 3;
  const thresholdGate = safeThreshold >= 2n;
  const thresholdWithinOwners =
    safeThreshold > 0n && safeThreshold <= BigInt(normalizedOwners.length);
  const calculatedSafePolicy =
    safeHasCode && ownerCountGate && thresholdGate && thresholdWithinOwners;
  if (
    checks.safeOwnerCountMeetsPolicy !== ownerCountGate ||
    checks.safeThresholdMeetsPolicy !== thresholdGate ||
    checks.safeThresholdWithinOwners !== thresholdWithinOwners ||
    checks.safePolicyReady !== calculatedSafePolicy ||
    safePolicyReady !== calculatedSafePolicy
  ) {
    throw new Error(
      "The on-chain Safe evidence conflicts with the production Safe policy.",
    );
  }
  const calculatedCallable =
    checks.chainIdMatchesBase &&
    deploymentStatus === "active" &&
    checks.tradingOpened &&
    checks.stakingTokenMatchesGcat &&
    checks.coreLinksToStaking &&
    checks.stakingLinksToCore;
  if (contractCallable !== calculatedCallable) {
    throw new Error(
      "Staking contract callability conflicts with the on-chain wiring checks.",
    );
  }
  if (
    canStakeNow &&
    (!checkNames.every((checkName) => checks[checkName] === true) ||
      !contractCallable ||
      !payoutAccountingHealthy)
  ) {
    throw new Error(
      "An open staking response contains a failed readiness gate.",
    );
  }

  return {
    schemaVersion,
    observedAt: new Date(observedAtMs).toISOString(),
    observedAtMs,
    validUntil: new Date(validUntilMs).toISOString(),
    validUntilMs,
    blockNumber: parseBlockNumber(data.blockNumber),
    blockHash,
    readiness,
    canStakeNow,
    tradingOpened,
    tradingAvailability,
    stakingAvailability,
    rewardPoolMeetsMinimum,
    rewardPool,
    minRewardPool,
  };
}

async function refreshStatus() {
  requestController?.abort();
  const controller = new AbortController();
  requestController = controller;
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(productionProtocolStatus.apiUrl, {
      credentials: "omit",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(
        `The production status endpoint returned HTTP ${response.status}.`,
      );
    }
    const parsed = parseStatus(await response.json());
    if (controller.signal.aborted) return;
    status.value = parsed;
    nowMs.value = Date.now();
    errorMessage.value = "";
    loadState.value = "current";
  } catch (error) {
    if (controller.signal.aborted && requestController !== controller) return;
    status.value = null;
    errorMessage.value =
      error instanceof Error && error.name !== "AbortError"
        ? error.message
        : "The production status request timed out.";
    loadState.value = "unavailable";
  } finally {
    clearTimeout(timeout);
    if (requestController === controller) requestController = null;
  }
}

const observationAgeSeconds = computed(() => {
  if (!status.value) return null;
  return Math.max(
    0,
    Math.floor((nowMs.value - status.value.observedAtMs) / 1_000),
  );
});

const isFresh = computed(
  () =>
    loadState.value === "current" &&
    status.value !== null &&
    nowMs.value - status.value.observedAtMs <= MAX_OBSERVATION_AGE_MS &&
    nowMs.value < status.value.validUntilMs,
);

const displayState = computed<
  "checking" | "ready" | "not-ready" | "unavailable"
>(() => {
  if (loadState.value === "checking") return "checking";
  if (!isFresh.value || !status.value) return "unavailable";
  return status.value.canStakeNow ? "ready" : "not-ready";
});

const statusLabel = computed(() => {
  if (displayState.value === "ready") return "Official readiness: ready";
  if (displayState.value === "not-ready")
    return "Official readiness: not ready";
  if (displayState.value === "checking") return "Current status unverified";
  return "Current status unavailable";
});

const unavailableDetail = computed(() => {
  const detail = errorMessage.value.trim();
  if (!detail && status.value) {
    return `The last validated observation exceeded its ${productionProtocolStatus.maxObservationAgeSeconds}-second freshness window or validUntil deadline.`;
  }
  if (!detail)
    return "No validated production status observation is available.";
  return /[.!?]$/.test(detail) ? detail : `${detail}.`;
});

function formatGcat(value: string): string {
  const [whole, fraction] = value.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction ? `${grouped}.${fraction}` : grouped;
}

function shortHash(value: string): string {
  return `${value.slice(0, 10)}…${value.slice(-8)}`;
}

onMounted(() => {
  nowMs.value = Date.now();
  void refreshStatus();
  refreshTimer = setInterval(() => void refreshStatus(), REFRESH_INTERVAL_MS);
  clockTimer = setInterval(() => {
    nowMs.value = Date.now();
  }, CLOCK_TICK_MS);
});

onBeforeUnmount(() => {
  const activeRequest = requestController;
  requestController = null;
  activeRequest?.abort();
  if (refreshTimer) clearInterval(refreshTimer);
  if (clockTimer) clearInterval(clockTimer);
});
</script>

<template>
  <section
    class="protocol-status"
    :class="`is-${displayState}`"
    aria-labelledby="live-protocol-status-title"
  >
    <header class="protocol-status-header">
      <div>
        <p class="protocol-status-eyebrow">Production status API</p>
        <h2 id="live-protocol-status-title">Live protocol status</h2>
      </div>
      <span class="protocol-status-badge" role="status" aria-live="polite">{{
        statusLabel
      }}</span>
    </header>

    <template v-if="isFresh && status">
      <p class="protocol-status-summary">
        This observation passed schema, consistency, chain, and
        {{ productionProtocolStatus.maxObservationAgeSeconds }}-second freshness
        checks.
      </p>
      <dl class="protocol-status-grid">
        <div>
          <dt>Staking gate</dt>
          <dd>{{ status.canStakeNow ? "Ready" : "Not ready" }}</dd>
        </div>
        <div>
          <dt>Readiness reason</dt>
          <dd>
            <code>{{ status.readiness }}</code>
          </dd>
        </div>
        <div>
          <dt>Trading on-chain read</dt>
          <dd>{{ status.tradingOpened ? "Open" : "Not open" }}</dd>
        </div>
        <div>
          <dt>Official trading capability</dt>
          <dd>{{ status.tradingAvailability }}</dd>
        </div>
        <div>
          <dt>Official staking capability</dt>
          <dd>{{ status.stakingAvailability }}</dd>
        </div>
        <div>
          <dt>Reward pool</dt>
          <dd>{{ formatGcat(status.rewardPool.gcat) }} GCAT</dd>
        </div>
        <div>
          <dt>Minimum gate</dt>
          <dd>{{ formatGcat(status.minRewardPool.gcat) }} GCAT</dd>
        </div>
        <div>
          <dt>Observed block</dt>
          <dd>{{ status.blockNumber }}</dd>
        </div>
        <div>
          <dt>Block hash</dt>
          <dd>
            <code :title="status.blockHash">{{
              shortHash(status.blockHash)
            }}</code>
          </dd>
        </div>
        <div>
          <dt>Observed at</dt>
          <dd>{{ status.observedAt }}</dd>
        </div>
        <div>
          <dt>Valid until</dt>
          <dd>{{ status.validUntil }}</dd>
        </div>
        <div>
          <dt>Observation age</dt>
          <dd>{{ observationAgeSeconds }} seconds</dd>
        </div>
        <div>
          <dt>API schema</dt>
          <dd>{{ status.schemaVersion }}</dd>
        </div>
      </dl>
    </template>

    <div
      v-else
      class="protocol-status-unavailable"
      role="status"
      aria-live="polite"
    >
      <strong>현재 확인 불가 / Current status unavailable</strong>
      <p>
        {{ unavailableDetail }} Do not infer current trading, staking, or
        reward-pool availability from the dated static snapshot.
      </p>
    </div>

    <footer class="protocol-status-footer">
      <a
        :href="productionProtocolStatus.apiUrl"
        target="_blank"
        rel="noreferrer"
        >Open raw status</a
      >
      <button type="button" @click="refreshStatus">Check again</button>
    </footer>
  </section>
</template>
