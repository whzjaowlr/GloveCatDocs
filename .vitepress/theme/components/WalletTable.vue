<script setup lang="ts">
import {
  addressUrl,
  safeApiUrl,
  safeAppUrl,
  shortPublicValue,
  wallets,
  walletsByName,
} from "../../data/contracts";
</script>

<template>
  <div class="registry-list wallet-registry" aria-label="Project wallets">
    <article v-for="wallet in wallets" :key="wallet.name" class="registry-item">
      <div class="registry-item-main">
        <div class="registry-copy">
          <h3>{{ wallet.name }}</h3>
          <p>{{ wallet.description }}</p>
        </div>
      </div>

      <div class="registry-meta">
        <span class="registry-label">Address</span>
        <a
          v-if="wallet.address"
          :href="addressUrl(wallet.address) || undefined"
          target="_blank"
          rel="noreferrer"
          :title="wallet.address"
        >
          <code>{{ shortPublicValue(wallet.address) }}</code>
        </a>
        <span v-else>Pending redeploy</span>
      </div>

      <div class="registry-actions" v-if="wallet.address">
        <a
          :href="addressUrl(wallet.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Address
        </a>
        <a
          v-if="wallet.address === walletsByName.Safe.address"
          :href="safeAppUrl(wallet.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Safe app
        </a>
        <a
          v-if="wallet.address === walletsByName.Safe.address"
          :href="safeApiUrl(wallet.address) || undefined"
          target="_blank"
          rel="noreferrer"
        >
          Safe API
        </a>
      </div>
    </article>
  </div>
</template>
