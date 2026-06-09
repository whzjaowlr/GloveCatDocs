<script setup lang="ts">
import { computed } from "vue";
import {
  addressUrl,
  contractsByName,
  tokenUrl,
  type ContractKey,
} from "../../data/contracts";

const props = defineProps<{
  name: ContractKey;
  token?: boolean;
}>();

const contract = computed(() => contractsByName[props.name]);
const href = computed(() =>
  props.token ? tokenUrl(contract.value.address) : addressUrl(contract.value.address)
);
</script>

<template>
  <a v-if="href" :href="href" target="_blank" rel="noreferrer">
    <code>{{ contract.address }}</code>
  </a>
  <span v-else>Pending fresh redeploy manifest</span>
</template>
