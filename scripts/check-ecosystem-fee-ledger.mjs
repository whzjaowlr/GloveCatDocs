import { readFile } from "node:fs/promises";
import path from "node:path";

const ledgerPath = path.join(
  process.cwd(),
  ".vitepress",
  "data",
  "ecosystem-fee-usage.json",
);
const ledger = JSON.parse(await readFile(ledgerPath, "utf8"));
const failures = [];
const addressPattern = /^0x[0-9a-fA-F]{40}$/;
const hashPattern = /^0x[0-9a-fA-F]{64}$/;

function fail(message) {
  failures.push(message);
}

function parseDecimal(value, label) {
  if (typeof value !== "string" || !/^\d+(?:\.\d+)?$/.test(value)) {
    fail(`${label} must be a non-negative decimal string`);
    return { integer: 0n, scale: 0 };
  }
  const [whole, fraction = ""] = value.split(".");
  return {
    integer: BigInt(`${whole}${fraction}`),
    scale: fraction.length,
  };
}

function compareProduct(left, right, expected) {
  return (
    left.integer *
      right.integer *
      10n ** BigInt(expected.scale) ===
    expected.integer * 10n ** BigInt(left.scale + right.scale)
  );
}

function subtract(left, right, label) {
  const scale = Math.max(left.scale, right.scale);
  const leftValue = left.integer * 10n ** BigInt(scale - left.scale);
  const rightValue = right.integer * 10n ** BigInt(scale - right.scale);
  if (leftValue < rightValue) {
    fail(`${label} cannot be negative`);
    return { integer: 0n, scale };
  }
  return { integer: leftValue - rightValue, scale };
}

function add(values) {
  const scale = Math.max(...values.map((value) => value.scale), 0);
  return {
    integer: values.reduce(
      (total, value) =>
        total + value.integer * 10n ** BigInt(scale - value.scale),
      0n,
    ),
    scale,
  };
}

function equalDecimal(left, right) {
  const scale = Math.max(left.scale, right.scale);
  return (
    left.integer * 10n ** BigInt(scale - left.scale) ===
    right.integer * 10n ** BigInt(scale - right.scale)
  );
}

if (!/^1\.\d+\.\d+$/.test(ledger.schemaVersion || "")) {
  fail("schemaVersion must use supported major version 1");
}
if (ledger.chain?.chainId !== 8453) fail("chain.chainId must be 8453");
if (!addressPattern.test(ledger.safe?.address || "")) {
  fail("safe.address must be a valid address");
}
if (!addressPattern.test(ledger.token?.address || "")) {
  fail("token.address must be a valid address");
}
if (ledger.token?.decimals !== 18) fail("token.decimals must be 18");
if (!/^\d{4}-\d{2}-\d{2}$/.test(ledger.reviewedAt || "")) {
  fail("reviewedAt must use YYYY-MM-DD");
}
if (!Array.isArray(ledger.entries) || ledger.entries.length === 0) {
  fail("entries must contain at least one executed use");
}

const ids = new Set();
const transactionHashes = new Set();
const safeTransactionHashes = new Set();
const nonces = new Set();

for (const [entryIndex, entry] of (ledger.entries || []).entries()) {
  const prefix = `entries[${entryIndex}]`;
  if (!entry.id || ids.has(entry.id)) fail(`${prefix}.id must be unique`);
  ids.add(entry.id);
  if (entry.status !== "executed") {
    fail(`${prefix}.status must be executed; proposed transactions do not belong in the ledger`);
  }
  if (!entry.title || !entry.category || !entry.description) {
    fail(`${prefix} must include title, category, and description`);
  }
  if (Number.isNaN(Date.parse(entry.executedAt))) {
    fail(`${prefix}.executedAt must be a valid ISO timestamp`);
  }
  if (!Number.isInteger(entry.safeNonce) || entry.safeNonce < 0) {
    fail(`${prefix}.safeNonce must be a non-negative integer`);
  } else if (nonces.has(entry.safeNonce)) {
    fail(`${prefix}.safeNonce duplicates another entry`);
  }
  nonces.add(entry.safeNonce);
  if (
    !Number.isInteger(entry.confirmationsRequired) ||
    !Number.isInteger(entry.ownersAtExecution) ||
    entry.confirmationsRequired < 1 ||
    entry.confirmationsRequired > entry.ownersAtExecution
  ) {
    fail(`${prefix} has an invalid Safe approval policy`);
  }
  if (!Number.isInteger(entry.blockNumber) || entry.blockNumber <= 0) {
    fail(`${prefix}.blockNumber must be a positive integer`);
  }
  if (!hashPattern.test(entry.transactionHash || "")) {
    fail(`${prefix}.transactionHash must be a transaction hash`);
  } else if (transactionHashes.has(entry.transactionHash.toLowerCase())) {
    fail(`${prefix}.transactionHash duplicates another entry`);
  }
  transactionHashes.add(entry.transactionHash?.toLowerCase());
  if (!hashPattern.test(entry.safeTransactionHash || "")) {
    fail(`${prefix}.safeTransactionHash must be a hash`);
  } else if (safeTransactionHashes.has(entry.safeTransactionHash.toLowerCase())) {
    fail(`${prefix}.safeTransactionHash duplicates another entry`);
  }
  safeTransactionHashes.add(entry.safeTransactionHash?.toLowerCase());

  if (!Array.isArray(entry.recipients) || entry.recipients.length === 0) {
    fail(`${prefix}.recipients must not be empty`);
    continue;
  }

  const recipientIds = new Set();
  const recipientAmounts = [];
  for (const [recipientIndex, recipient] of entry.recipients.entries()) {
    const recipientPrefix = `${prefix}.recipients[${recipientIndex}]`;
    if (!recipient.id || recipientIds.has(recipient.id)) {
      fail(`${recipientPrefix}.id must be unique within the batch`);
    }
    recipientIds.add(recipient.id);
    if (!recipient.label) fail(`${recipientPrefix}.label is required`);
    if (!addressPattern.test(recipient.address || "")) {
      fail(`${recipientPrefix}.address must be valid`);
    }
    const amount = parseDecimal(recipient.amountGcat, `${recipientPrefix}.amountGcat`);
    if (amount.integer <= 0n) fail(`${recipientPrefix}.amountGcat must be positive`);
    if (amount.scale > ledger.token.decimals) {
      fail(`${recipientPrefix}.amountGcat exceeds token decimals`);
    }
    recipientAmounts.push(amount);

    if (entry.priceReference) {
      const price = parseDecimal(
        entry.priceReference.pricePerGcat,
        `${prefix}.priceReference.pricePerGcat`,
      );
      const reference = parseDecimal(
        recipient.referenceUsd,
        `${recipientPrefix}.referenceUsd`,
      );
      if (!compareProduct(amount, price, reference)) {
        fail(`${recipientPrefix}.referenceUsd does not equal amountGcat * pricePerGcat`);
      }
    } else if (recipient.referenceUsd !== undefined) {
      fail(`${recipientPrefix}.referenceUsd requires entry.priceReference`);
    }
  }

  if (entry.priceReference) {
    if (entry.priceReference.currency !== "USD") {
      fail(`${prefix}.priceReference.currency must currently be USD`);
    }
    if (Number.isNaN(Date.parse(entry.priceReference.observedAt))) {
      fail(`${prefix}.priceReference.observedAt must be a valid ISO timestamp`);
    }
    if (
      !entry.priceReference.source ||
      !entry.priceReference.sourceUrl ||
      !entry.priceReference.note
    ) {
      fail(`${prefix}.priceReference must document source, sourceUrl, and note`);
    }
  }

  const proof = entry.balanceProof;
  if (!proof) {
    fail(`${prefix}.balanceProof is required`);
    continue;
  }
  if (proof.afterBlock !== entry.blockNumber) {
    fail(`${prefix}.balanceProof.afterBlock must equal blockNumber`);
  }
  if (proof.beforeBlock >= proof.afterBlock) {
    fail(`${prefix}.balanceProof.beforeBlock must precede afterBlock`);
  }
  const before = parseDecimal(proof.beforeGcat, `${prefix}.balanceProof.beforeGcat`);
  const after = parseDecimal(proof.afterGcat, `${prefix}.balanceProof.afterGcat`);
  if (before.scale > ledger.token.decimals || after.scale > ledger.token.decimals) {
    fail(`${prefix}.balanceProof exceeds token decimals`);
  }
  const difference = subtract(before, after, `${prefix}.balanceProof difference`);
  const distributed = add(recipientAmounts);
  if (!equalDecimal(difference, distributed)) {
    fail(`${prefix}.balanceProof difference does not equal the recipient total`);
  }
}

const snapshotBlocks = new Set();
for (const [snapshotIndex, snapshot] of (ledger.balanceSnapshots || []).entries()) {
  const prefix = `balanceSnapshots[${snapshotIndex}]`;
  if (!Number.isInteger(snapshot.blockNumber) || snapshot.blockNumber <= 0) {
    fail(`${prefix}.blockNumber must be a positive integer`);
  } else if (snapshotBlocks.has(snapshot.blockNumber)) {
    fail(`${prefix}.blockNumber duplicates another snapshot`);
  }
  snapshotBlocks.add(snapshot.blockNumber);
  if (Number.isNaN(Date.parse(snapshot.observedAt))) {
    fail(`${prefix}.observedAt must be a valid ISO timestamp`);
  }
  const snapshotBalance = parseDecimal(snapshot.balanceGcat, `${prefix}.balanceGcat`);
  if (snapshotBalance.scale > ledger.token.decimals) {
    fail(`${prefix}.balanceGcat exceeds token decimals`);
  }
  if (!snapshot.note) fail(`${prefix}.note is required`);
}

const latestExecutionBlock = Math.max(
  ...(ledger.entries || []).map((entry) => entry.blockNumber || 0),
);
const latestSnapshotBlock = Math.max(
  ...(ledger.balanceSnapshots || []).map((snapshot) => snapshot.blockNumber || 0),
);
if (latestSnapshotBlock < latestExecutionBlock) {
  fail("the latest balance snapshot cannot predate the latest executed use");
}

if (failures.length > 0) {
  throw new Error(`Ecosystem fee ledger validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `Validated ${ledger.entries.length} ecosystem fee usage batch(es) and ${ledger.balanceSnapshots.length} fixed-block balance snapshot(s).`,
);
