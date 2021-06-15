<template>
  <div class="h-56 grid grid-cols-3 gap-4 text-center m-4">
    <Square v-for="(item, index) in board" :v-bind="index" :key="index"/>
  </div>
</template>
<script setup lang="ts">
  import Square from '../components/Square.vue';
  import {ref} from 'vue';
  let board= new Array<Number>();
  for(let i=1; i<=9; i++){
    board.push(i);
  }
</script>
