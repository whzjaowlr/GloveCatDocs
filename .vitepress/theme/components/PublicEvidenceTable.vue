<script setup lang="ts">
import { publicEvidenceLinks, shortPublicValue } from "../../data/contracts";
</script>

<template>
  <div class="evidence-list" aria-label="Public evidence links">
    <article v-for="link in publicEvidenceLinks" :key="link.name" class="evidence-item">
      <div class="evidence-item-main">
        <div class="registry-copy">
          <h3>{{ link.name }}</h3>
          <p>{{ link.description }}</p>
        </div>
        <a :href="link.href" target="_blank" rel="noreferrer" class="registry-primary-action">
          Open
        </a>
      </div>

      <div class="registry-meta">
        <span class="registry-label">Value</span>
        <code v-if="link.value" :title="link.value">{{ shortPublicValue(link.value) }}</code>
        <span v-else>{{ shortPublicValue(link.value) }}</span>
      </div>
    </article>
  </div>
</template>
