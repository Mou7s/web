<template>
  <div aria-label="container" class="flex justify-center min-h-screen dark:bg-black dark:text-white">

    <div class="grid justify-around grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

  </div>
</template>

<style scoped>
.item {
  @apply w-32 h-32 bg-cyan-500;
}
</style>