<template>
  <div class="static">
    <h1 :class="{ active: state.active }">
      Current State: {{ state.active ? "Active" : "Inactive" }}
    </h1>
    <button type="button" @click="toggleError" class="btn btn-blue">
      Set to: {{ state.activeText }}
    </button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, computed, defineComponent } from "vue";

const state = reactive({
  active: true,
  error: false,
  activeText: "Inactive",
  errorText: "Error",
});

function toggleBtn() {
  state.error = !state.error;
  state.errorText = state.error ? "Error" : "No Error";
}
function toggleError() {
  state.active = !state.active;
  console.log(state.active);
  state.activeText = state.active == true ? "Inactive" : "Active";
}

export default defineComponent({
  setup() {
    return {
      state,
      toggleBtn,
      toggleError,
    };
  },
});
</script>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
