<script setup lang="ts">
import { addressUrl, wallets } from "../../data/contracts";
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Wallet</th>
        <th>Description</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="wallet in wallets" :key="wallet.name">
        <td>{{ wallet.name }}</td>
        <td>{{ wallet.description }}</td>
        <td>
          <a
            v-if="wallet.address"
            :href="addressUrl(wallet.address) || undefined"
            target="_blank"
            rel="noreferrer"
          >
            <code>{{ wallet.address }}</code>
          </a>
          <span v-else>Pending fresh redeploy manifest</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
