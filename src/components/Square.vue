<template>

  <div class="bg-pink-400 flex flex-col p-4 m-4 aspect-square justify-center items-center">
    <p class="text-white" @click="handleError">O</p>
  </div>
</template>
<script lang="ts" setup>
function handleError(){
  console.log('hello');
}
</script>

