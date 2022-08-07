<template>
  <ul>
    <li
      v-for="item in items" :key="item.key"
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
        Profile
      </a>
    </li>
  </ul>
</template>
