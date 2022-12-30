<template>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";


const openTab: Ref<number> = ref(1);
const name: Ref<string> = ref("red-tabs");
function toggleTabs(tabNumber: number) {
  openTab.value = tabNumber;
}
</script>
