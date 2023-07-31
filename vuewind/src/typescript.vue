<script setup lang="ts">
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// 打印 "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
</script>

<template>
  <div class="grid place-content-center min-h-screen"></div>
</template>
