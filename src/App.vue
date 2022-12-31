<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="h-screen w-full antialiased
      bg-gradient-to-r
      from-sky-100
      via-sky-50
      to-sky-50">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
