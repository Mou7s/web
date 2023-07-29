<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="grid text-center place-content-center min-h-screen w-full">
    <p class="text-6xl">Hello Vue</p>
    <button @click="count++">{{ count }}++</button>
  </div>
</template>
