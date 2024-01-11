<template>
  <div
    class="border-green-200 border border-solid p-4 relative bg-lime-700 before:absolute default"
  >
    <slot />
  </div>
</template>

<style scoped>
.default::before {
  content: 'layouts/default.vue';
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
