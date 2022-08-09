<template>
  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
    <li
      v-for="item in items"
      :key="item.key"
      class="-mb-px mr-2 last:mr-0 flex-auto text-center"
    >
      <a
        class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
        @click="toggleTabs(1)"
        :class="{
          'text-red-600 bg-white': openTab !== 1,
          'text-white bg-red-600': openTab === 1,
        }"
      >
        {{item}}
      </a>
    </li>
  </ul>
</template>
<script lang="ts" setup>
const props = defineProps<{
 items: Array<Object>
}>();
</script>
