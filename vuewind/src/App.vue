<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const message = ref('Hello World!');

console.log(count);
count.value++;
</script>

<template>
  <div class="grid place-content-center">
    <h1 class="text-9xl">{{ message.split('').reverse().join('') }}</h1>
    <p>count is: {{ count }}</p>
  </div>
</template>

<style scoped></style>
