<script setup>
let canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 100);
  ctx.fillRect(200, 200, 150, 100);
});
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>
