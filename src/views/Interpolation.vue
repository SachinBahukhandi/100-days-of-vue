<template>
  <div>
    <div>
      <!-- ... -->
      <div>{{ state.count }}</div>
      <button type="button" @click="increment">Click to Increment</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 });

    function increment(){
        state.count++;
    }
    // expose the state to the template
    return {
      state,
      increment
    };
  },
});
</script>
