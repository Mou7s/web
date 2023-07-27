<script setup lang="ts">
import { ref, reactive } from 'vue';

const counter = reactive({ count: 0 });

const message = ref('Hello World!');
</script>

<template>
  <div class="grid place-content-center text-center h-screen">
    <h1 class="text-9xl">{{ message }}</h1>
    <p>count is: {{ counter.count }}</p>

    <button @click="counter.count++">Count++</button>
  </div>
</template>

<style scoped></style>
