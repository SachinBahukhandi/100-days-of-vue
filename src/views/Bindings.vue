<template>
 <div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
</template>
<script lang="ts">
import { ref, reactive, computed, defineComponent } from "vue";

const isActive = ref(true);
const hasError = ref(false);

export default defineComponent({
  setup() {
    return {
      isActive,
      hasError
    };
  },
});
</script>
