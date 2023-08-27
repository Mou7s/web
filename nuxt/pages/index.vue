<script setup lang="ts"></script>

<template>
  <div grid place-content-center min-h-screen>
    <p>minesweeper</p>

    <div v-for="y in 10" :key="y">
      <button v-for="x in 10" :key="x" w-10 h-10 border hover:bg-gray>
        {{ (y - 1) * 10 + x }}
      </button>
    </div>
  </div>
</template>
