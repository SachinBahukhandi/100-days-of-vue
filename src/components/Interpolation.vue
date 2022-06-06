<template>
    <div>
        <h1>{{ state.message }}</h1>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        const state= reactive({message: 'Hello World!'});
        return state;
    },
}
</script>