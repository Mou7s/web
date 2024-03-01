<template>
  <div class="grid place-content-center min-h-screen">
    <UButton @click="log">log</UButton>
    <UButton @click="logDebounce">logDebounce</UButton>
  </div>
</template>

<script setup>
const log = () => {
  console.log(123);
};

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const logDebounce = debounce(log, 1000);
</script>
