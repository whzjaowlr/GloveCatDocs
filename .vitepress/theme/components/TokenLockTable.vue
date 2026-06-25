<script setup lang="ts">
import { addressUrl, shortPublicValue, tokenLocks, txUrl } from "../../data/contracts";
</script>

<template>
  <div class="lock-evidence">
    <div class="lock-summary-list" aria-label="Token lock evidence">
      <article v-for="lock in tokenLocks" :key="lock.name" class="lock-summary-item">
        <div class="registry-item-main">
          <div class="registry-copy">
            <h3>{{ lock.name }}</h3>
            <p>{{ lock.schedule }}</p>
          </div>
          <span class="evidence-status">{{ lock.status }}</span>
        </div>

        <div class="registry-meta">
          <span class="registry-label">Amount</span>
          <strong>{{ lock.amountGcat }}</strong>
        </div>

        <div class="evidence-links">
          <a
            :href="addressUrl(lock.target) || undefined"
            target="_blank"
            rel="noreferrer"
            :title="lock.target"
          >
            PinkLock target
            <code>{{ shortPublicValue(lock.target) }}</code>
          </a>
          <a
            :href="txUrl(lock.txHash) || undefined"
            target="_blank"
            rel="noreferrer"
            :title="lock.txHash"
          >
            Lock tx
            <code>{{ shortPublicValue(lock.txHash) }}</code>
          </a>
        </div>
      </article>
    </div>

    <div class="lock-details" aria-label="Lock schedule details">
      <section
        v-for="lock in tokenLocks"
        :key="`${lock.name}-details`"
        class="lock-detail"
      >
        <h3>{{ lock.name }}</h3>
        <dl>
          <div>
            <dt>Schedule</dt>
            <dd>{{ lock.schedule }}</dd>
          </div>
          <div>
            <dt>Target</dt>
            <dd>
              <a
                :href="addressUrl(lock.target) || undefined"
                target="_blank"
                rel="noreferrer"
              >
                Open target
              </a>
              <code>{{ lock.target }}</code>
            </dd>
          </div>
          <div>
            <dt>Transaction</dt>
            <dd>
              <a
                :href="txUrl(lock.txHash) || undefined"
                target="_blank"
                rel="noreferrer"
              >
                Open transaction
              </a>
              <code>{{ lock.txHash }}</code>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  </div>
</template>
