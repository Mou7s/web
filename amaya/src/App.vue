<template>
  <div class="dark:bg-black dark:text-white min-h-screen">
    <Header></Header>
    <main>
      <img src="./assets/images/headerBackground1.png" alt="">
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style scoped>
.item {
  @apply w-48 h-32 bg-cyan-500;
}
</style>