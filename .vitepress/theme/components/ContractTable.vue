<script setup lang="ts">
import {
  addressUrl,
  contractCodeUrl,
  contracts,
  shortPublicValue,
  tokenUrl,
} from "../../data/contracts";
</script>

<template>
  <div class="registry-list contract-registry" aria-label="Base mainnet contracts">
    <article v-for="contract in contracts" :key="contract.name" class="registry-item">
      <div class="registry-item-main">
        <div class="registry-copy">
          <h3>{{ contract.name }}</h3>
          <p>{{ contract.description }}</p>
        </div>
        <div class="registry-badges">
          <span class="registry-badge is-complete">
            {{ contract.verified ? "Basescan verified" : "Verification pending" }}
          </span>
          <span class="registry-badge">{{ contract.status }}</span>
        </div>
      </div>

      <div class="registry-meta">
        <span class="registry-label">Address</span>
        <a
          v-if="contract.address"
          :href="addressUrl(contract.address) || undefined"
          target="_blank"
          rel="noreferrer"
          :title="contract.address"
        >
          <code>{{ shortPublicValue(contract.address) }}</code>
        </a>
        <span v-else>Pending</span>
      </div>

      <div class="registry-actions" v-if="contract.address">
        <a
          :href="addressUrl(contract.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Address
        </a>
        <a
          :href="contractCodeUrl(contract.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
        <a
          v-if="contract.name === 'GloveCatCore'"
          :href="tokenUrl(contract.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Token
        </a>
      </div>
    </article>
  </div>
</template>
