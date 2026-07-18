<script setup lang="ts">
import ledgerSource from "../../data/ecosystem-fee-usage.json";

type Recipient = {
  id: string;
  label: string;
  address: string;
  amountGcat: string;
  referenceUsd?: string;
};

type PriceReference = {
  currency: string;
  pricePerGcat: string;
  observedAt: string;
  source: string;
  sourceUrl: string;
  note: string;
};

type LedgerEntry = {
  id: string;
  title: string;
  category: string;
  description: string;
  status: "executed";
  executedAt: string;
  safeNonce: number;
  ownersAtExecution: number;
  confirmationsRequired: number;
  blockNumber: number;
  transactionHash: string;
  safeTransactionHash: string;
  priceReference?: PriceReference;
  recipients: Recipient[];
  balanceProof: {
    beforeBlock: number;
    beforeGcat: string;
    afterBlock: number;
    afterGcat: string;
  };
};

type Ledger = {
  reviewedAt: string;
  chain: { name: string; chainId: number; explorerUrl: string };
  safe: { address: string; appUrl: string };
  token: { symbol: string; address: string; decimals: number };
  collectionPolicy: {
    sellFeeBps: number;
    trigger: string;
    directWalletTransferFeeBps: number;
  };
  entries: LedgerEntry[];
  balanceSnapshots: Array<{
    blockNumber: number;
    observedAt: string;
    balanceGcat: string;
    note: string;
  }>;
};

const ledger = ledgerSource as Ledger;
const tokenUnit = 10n ** BigInt(ledger.token.decimals);
const entries = [...ledger.entries].sort((left, right) =>
  right.executedAt.localeCompare(left.executedAt),
);
const latestEntry = entries[0];
const latestBalance = [...ledger.balanceSnapshots].sort(
  (left, right) => right.blockNumber - left.blockNumber,
)[0];

function parseTokenAmount(value: string) {
  const [whole, fraction = ""] = value.split(".");
  return (
    BigInt(whole) * tokenUnit +
    BigInt(fraction.padEnd(ledger.token.decimals, "0"))
  );
}

function formatTokenAmount(value: bigint) {
  const whole = value / tokenUnit;
  const fraction = (value % tokenUnit)
    .toString()
    .padStart(ledger.token.decimals, "0")
    .replace(/0+$/, "");
  return `${whole.toLocaleString("en-US")}${fraction ? `.${fraction}` : ""}`;
}

function entryAmount(entry: LedgerEntry) {
  return entry.recipients.reduce(
    (total, recipient) => total + parseTokenAmount(recipient.amountGcat),
    0n,
  );
}

const totalUsed = entries.reduce(
  (total, entry) => total + entryAmount(entry),
  0n,
);

function referenceTotal(entry: LedgerEntry) {
  const total = entry.recipients.reduce(
    (sum, recipient) => sum + Number(recipient.referenceUsd || 0),
    0,
  );
  return total.toFixed(6);
}

function shortValue(value: string) {
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

function addressUrl(address: string) {
  return `${ledger.chain.explorerUrl}/address/${address}`;
}

function transactionUrl(hash: string) {
  return `${ledger.chain.explorerUrl}/tx/${hash}`;
}

function tokenUrl(address: string) {
  return `${ledger.chain.explorerUrl}/token/${address}`;
}

function transferHistoryUrl() {
  return `${ledger.chain.explorerUrl}/token/${ledger.token.address}?a=${ledger.safe.address}`;
}

function displayUtc(value: string) {
  return value.replace("T", " ").replace("Z", " UTC");
}
</script>

<template>
  <section class="fee-ledger" aria-label="Ecosystem fee usage ledger">
    <div class="ledger-review">Last reviewed: {{ ledger.reviewedAt }}</div>

    <div class="ledger-summary" aria-label="Usage summary">
      <article>
        <span>Executed batches</span>
        <strong>{{ entries.length }}</strong>
      </article>
      <article>
        <span>Total used</span>
        <strong>{{ formatTokenAmount(totalUsed) }} {{ ledger.token.symbol }}</strong>
      </article>
      <article>
        <span>Latest recorded use</span>
        <strong>{{ latestEntry ? displayUtc(latestEntry.executedAt) : "None" }}</strong>
      </article>
    </div>

    <section class="ledger-panel" aria-labelledby="ledger-controls-title">
      <div class="ledger-section-heading">
        <div>
          <p class="ledger-kicker">Custody</p>
          <h2 id="ledger-controls-title">Wallet and controls</h2>
        </div>
        <a :href="ledger.safe.appUrl" target="_blank" rel="noreferrer">Open Safe</a>
      </div>

      <dl class="ledger-facts">
        <div>
          <dt>Network</dt>
          <dd>{{ ledger.chain.name }} ({{ ledger.chain.chainId }})</dd>
        </div>
        <div>
          <dt>Ecosystem fee Safe</dt>
          <dd>
            <a :href="addressUrl(ledger.safe.address)" target="_blank" rel="noreferrer">
              <code>{{ shortValue(ledger.safe.address) }}</code>
            </a>
          </dd>
        </div>
        <div>
          <dt>{{ ledger.token.symbol }} token</dt>
          <dd>
            <a :href="tokenUrl(ledger.token.address)" target="_blank" rel="noreferrer">
              <code>{{ shortValue(ledger.token.address) }}</code>
            </a>
          </dd>
        </div>
        <div>
          <dt>Policy at latest use</dt>
          <dd>
            {{ latestEntry.confirmationsRequired }}-of-{{ latestEntry.ownersAtExecution }} owners
          </dd>
        </div>
        <div>
          <dt>Sell fee trigger</dt>
          <dd>{{ ledger.collectionPolicy.sellFeeBps / 100 }}% - {{ ledger.collectionPolicy.trigger }}</dd>
        </div>
        <div>
          <dt>Direct wallet transfer fee</dt>
          <dd>{{ ledger.collectionPolicy.directWalletTransferFeeBps / 100 }}%</dd>
        </div>
      </dl>

      <div v-if="latestBalance" class="ledger-balance-note">
        <span>Latest fixed-block balance in this ledger</span>
        <strong>
          {{ formatTokenAmount(parseTokenAmount(latestBalance.balanceGcat)) }}
          {{ ledger.token.symbol }}
        </strong>
        <small>Block {{ latestBalance.blockNumber }} - {{ latestBalance.note }}</small>
      </div>
    </section>

    <section class="ledger-history" aria-labelledby="ledger-history-title">
      <div class="ledger-section-heading">
        <div>
          <p class="ledger-kicker">On-chain history</p>
          <h2 id="ledger-history-title">Executed usage</h2>
        </div>
        <a :href="transferHistoryUrl()" target="_blank" rel="noreferrer">All transfers</a>
      </div>

      <article v-for="entry in entries" :key="entry.id" class="ledger-entry">
        <header>
          <div>
            <p class="ledger-entry-date">{{ displayUtc(entry.executedAt) }}</p>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.description }}</p>
          </div>
          <span class="ledger-status">Executed</span>
        </header>

        <div class="ledger-entry-stats">
          <div>
            <span>Category</span>
            <strong>{{ entry.category }}</strong>
          </div>
          <div>
            <span>Recipients</span>
            <strong>{{ entry.recipients.length }}</strong>
          </div>
          <div>
            <span>Batch amount</span>
            <strong>{{ formatTokenAmount(entryAmount(entry)) }} {{ ledger.token.symbol }}</strong>
          </div>
          <div>
            <span>Safe nonce</span>
            <strong>{{ entry.safeNonce }}</strong>
          </div>
        </div>

        <div class="ledger-table-wrap">
          <table class="ledger-table">
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Address</th>
                <th>Amount</th>
                <th v-if="entry.priceReference">Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="recipient in entry.recipients" :key="`${entry.id}-${recipient.id}`">
                <td>{{ recipient.label }}</td>
                <td>
                  <a :href="addressUrl(recipient.address)" target="_blank" rel="noreferrer">
                    <code>{{ shortValue(recipient.address) }}</code>
                  </a>
                </td>
                <td>
                  {{ formatTokenAmount(parseTokenAmount(recipient.amountGcat)) }}
                  {{ ledger.token.symbol }}
                </td>
                <td v-if="entry.priceReference">
                  {{ entry.priceReference.currency === "USD" ? "$" : "" }}{{ recipient.referenceUsd }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th :colspan="2">Total</th>
                <th>{{ formatTokenAmount(entryAmount(entry)) }} {{ ledger.token.symbol }}</th>
                <th v-if="entry.priceReference">${{ referenceTotal(entry) }}</th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div v-if="entry.priceReference" class="ledger-price-note">
          <p>
            Reference price:
            <a :href="entry.priceReference.sourceUrl" target="_blank" rel="noreferrer">
              ${{ entry.priceReference.pricePerGcat }} per {{ ledger.token.symbol }}
            </a>
            at {{ displayUtc(entry.priceReference.observedAt) }}.
          </p>
          <small>{{ entry.priceReference.note }}</small>
        </div>

        <div class="ledger-evidence">
          <div>
            <span>Base transaction</span>
            <a :href="transactionUrl(entry.transactionHash)" target="_blank" rel="noreferrer">
              <code>{{ shortValue(entry.transactionHash) }}</code>
            </a>
          </div>
          <div>
            <span>Base block</span>
            <strong>{{ entry.blockNumber }}</strong>
          </div>
          <div>
            <span>Safe transaction hash</span>
            <code class="ledger-long-value">{{ entry.safeTransactionHash }}</code>
          </div>
          <div>
            <span>Approval policy</span>
            <strong>{{ entry.confirmationsRequired }}-of-{{ entry.ownersAtExecution }}</strong>
          </div>
        </div>

        <div class="ledger-proof">
          <h4>Fixed-block balance proof</h4>
          <div class="ledger-table-wrap">
            <table class="ledger-table ledger-proof-table">
              <thead>
                <tr>
                  <th>Observation</th>
                  <th>Block</th>
                  <th>{{ ledger.token.symbol }} balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Before execution block</td>
                  <td>{{ entry.balanceProof.beforeBlock }}</td>
                  <td>
                    {{ formatTokenAmount(parseTokenAmount(entry.balanceProof.beforeGcat)) }}
                  </td>
                </tr>
                <tr>
                  <td>End of execution block</td>
                  <td>{{ entry.balanceProof.afterBlock }}</td>
                  <td>
                    {{ formatTokenAmount(parseTokenAmount(entry.balanceProof.afterGcat)) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colspan="2">Verified difference</th>
                  <th>{{ formatTokenAmount(entryAmount(entry)) }} {{ ledger.token.symbol }}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<style scoped>
.fee-ledger {
  display: grid;
  min-width: 0;
  gap: 24px;
  margin-top: 24px;
}

.fee-ledger > *,
.ledger-history,
.ledger-panel,
.ledger-entry {
  min-width: 0;
}

.ledger-review {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.ledger-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.ledger-summary article,
.ledger-panel,
.ledger-entry {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
}

.ledger-summary article {
  display: grid;
  gap: 8px;
  padding: 16px;
}

.ledger-summary span,
.ledger-entry-stats span,
.ledger-evidence span,
.ledger-balance-note span {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ledger-summary strong {
  font-size: 17px;
  line-height: 1.35;
}

.ledger-panel,
.ledger-entry {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 20px;
}

.ledger-section-heading,
.ledger-entry header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.ledger-section-heading h2,
.ledger-entry h3,
.ledger-proof h4 {
  margin: 0;
  border: 0;
  padding: 0;
}

.ledger-kicker,
.ledger-entry-date {
  margin: 0 0 4px;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ledger-section-heading > a,
.ledger-entry a {
  font-weight: 600;
}

.ledger-facts,
.ledger-evidence {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  margin: 18px 0 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-divider);
}

.ledger-facts > div,
.ledger-evidence > div {
  display: grid;
  gap: 5px;
  min-width: 0;
  padding: 12px;
  background: var(--vp-c-bg);
}

.ledger-facts dt {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

.ledger-facts dd {
  margin: 0;
  font-weight: 600;
}

.ledger-balance-note,
.ledger-price-note {
  display: grid;
  gap: 4px;
  margin-top: 14px;
  padding: 14px;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.ledger-balance-note small,
.ledger-price-note small {
  color: var(--vp-c-text-2);
}

.ledger-history {
  display: grid;
  min-width: 0;
  gap: 16px;
}

.ledger-entry header p:last-child {
  margin: 6px 0 0;
  color: var(--vp-c-text-2);
}

.ledger-status {
  flex: 0 0 auto;
  border: 1px solid color-mix(in srgb, var(--vp-c-green-1) 45%, transparent);
  border-radius: 999px;
  padding: 5px 10px;
  background: color-mix(in srgb, var(--vp-c-green-1) 12%, transparent);
  color: var(--vp-c-green-1);
  font-size: 12px;
  font-weight: 700;
}

.ledger-entry-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.ledger-entry-stats > div {
  display: grid;
  gap: 5px;
  min-width: 0;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
}

.ledger-entry-stats strong {
  overflow-wrap: anywhere;
}

.ledger-table-wrap {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  margin-top: 16px;
  overflow-x: auto;
}

.vp-doc .ledger-table {
  display: table;
  width: 100%;
  min-width: 620px;
  margin: 0;
}

.ledger-table th,
.ledger-table td {
  white-space: nowrap;
}

.ledger-table th:nth-child(n + 3),
.ledger-table td:nth-child(n + 3) {
  text-align: right;
}

.ledger-price-note p {
  margin: 0;
}

.ledger-evidence {
  margin-top: 16px;
}

.ledger-evidence strong,
.ledger-evidence a,
.ledger-evidence code {
  min-width: 0;
  overflow-wrap: anywhere;
}

.ledger-long-value {
  font-size: 11px;
}

.ledger-proof {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--vp-c-divider);
}

.vp-doc .ledger-proof-table {
  min-width: 680px;
}

@media (max-width: 760px) {
  .ledger-summary,
  .ledger-entry-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ledger-summary article:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .ledger-summary,
  .ledger-entry-stats,
  .ledger-facts,
  .ledger-evidence {
    grid-template-columns: 1fr;
  }

  .ledger-summary article:last-child {
    grid-column: auto;
  }

  .ledger-panel,
  .ledger-entry {
    padding: 16px;
  }

  .ledger-section-heading,
  .ledger-entry header {
    align-items: flex-start;
  }
}
</style>
