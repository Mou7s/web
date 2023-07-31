<script setup lang="ts">
// function add(a: number, b: number): number {
//   return a + b;
// }
const add = (a: number = 42, b: number = 0): number => {
  return a + b;
};
</script>

<template>
  <div class="grid place-content-center min-h-screen">
    {{ add() }}
  </div>
</template>
