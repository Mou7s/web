<template>
  <div class="grid place-content-center min-h-screen text-9xl">
    {{ _comma(1234567) }}
  </div>
</template>

<script setup>
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
</script>
