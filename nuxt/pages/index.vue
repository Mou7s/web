<template>
  <div class="min-h-screen grid place-content-center text-3xl">
    <div :class="textColorClass" class="text-9xl font-serif">
      {{ selectedColor }}
    </div>
    <select v-model="selectedColor">
      <option value="blue">blue</option>
      <option value="red">red</option>
    </select>
  </div>
</template>

<script setup>
const selectedColor = ref('blue');

const textColorClass = computed(() => {
  return `text-${selectedColor.value}-500`;
});
</script>
