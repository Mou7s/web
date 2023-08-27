<script setup lang="ts">
interface blockstate {
  x: number;
  y: number;
  revealed?: boolean;
  mine?: boolean;
  flagged?: boolean;
  adjacentMines: number;
}

const width = 10;
const height = 10;
const state = reactive(
  Array.from({ length: height }, (_, y) =>
    Array.from(
      { length: width },
      (_, x): blockstate => ({ x, y, adjacentMines: 0 })
    )
  )
);

function generateMines() {
  for (const row of state) {
    for (const block of row) block.mine = Math.random() < 0.2;
  }
}

const directions = [
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

function updateNumbers() {
  state.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block.mine) return;

      directions.forEach(([dx, dy]) => {
        const x2 = x + dx;
        const y2 = y + dy;
        if (x2 < 0 || x2 >= width || y2 < 0 || y2 >= height) return;

        if (state[y2][x2].mine) block.adjacentMines += 1;
      });
    });
  });
}

function onClick(x: number, y: number) {
  console.log(`Clicked at ${x} ${y}`);
}
function getBlockClass(block: blockstate) {
  return block.mine ? 'text-red border-red' : 'text-gray';
}
generateMines();
updateNumbers();
</script>

<template>
  <div min-h-screen text-center>
    <div v-for="(row, y) in state" :key="y" flex="~">
      <button
        v-for="(item, x) in row"
        @click="onClick(x, y)"
        :key="x"
        w-10
        h-10
        border
        hover:bg-gray
        flex="~"
        items-center
        justify-center
        :class="getBlockClass(item)"
      >
        <div v-if="item.mine" i-mdi-bomb></div>

        <div v-else>{{ item.adjacentMines }}</div>
      </button>
    </div>
  </div>
</template>
