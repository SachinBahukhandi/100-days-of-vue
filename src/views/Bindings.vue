<template>
  <div class="static">
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span>{{ state.activeText }}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <h1 >
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
