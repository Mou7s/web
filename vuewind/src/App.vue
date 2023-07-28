<script setup lang="ts">
import { ref, computed } from 'vue';
const a = 5;
const b = 10;

const sum = computed(() => {
  return a + b;
});
</script>

<template>
  <div class="grid place-content-center w-full min-h-screen text-center">
    {{ sum }}
  </div>
</template>

<style scoped></style>
