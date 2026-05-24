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
          <a :href="addressUrl(wallet.address)" target="_blank" rel="noreferrer">
            <code>{{ wallet.address }}</code>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
