<template>
  <div class="dark:bg-black dark:text-white min-h-screen">
    <Header></Header>
    <main>
      <img src="./assets/images/headerBackground1.png" alt="" />
      <div class="bg-white p-16">
        <p class="title">Product Category</p>
        <hr class="w-1/12 my-0 mx-auto border-orange-600 border" />
      </div>

      <div class="bg-orange-100 p-16">
        <p class="title">Agent Brand</p>
        <hr class="w-1/12 my-0 mx-auto border-orange-600 border" />
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style scoped>
.item {
  @apply w-48 h-32 bg-cyan-500;
}

.title {
  @apply text-black text-center text-5xl font-bold my-8;
}
</style>
