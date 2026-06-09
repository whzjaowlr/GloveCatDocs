<script setup lang="ts">
import { addressUrl, contracts } from "../../data/contracts";
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Contract</th>
        <th>Description</th>
        <th>Address</th>
        <th>Status</th>
        <th>Verified</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contract in contracts" :key="contract.name">
        <td>{{ contract.name }}</td>
        <td>{{ contract.description }}</td>
        <td>
          <a
            v-if="contract.address"
            :href="addressUrl(contract.address) || undefined"
            target="_blank"
            rel="noreferrer"
          >
            <code>{{ contract.address }}</code>
          </a>
          <span v-else>Pending</span>
        </td>
        <td>{{ contract.status }}</td>
        <td>{{ contract.verified ? "Yes" : "No" }}</td>
      </tr>
    </tbody>
  </table>
</template>
