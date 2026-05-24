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
  label?: string;
  token?: boolean;
}>();

const contract = computed(() => contractsByName[props.name]);
const href = computed(() =>
  props.token ? tokenUrl(contract.value.address) : addressUrl(contract.value.address)
);
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer">
    {{ label || contract.name }}
  </a>
</template>
