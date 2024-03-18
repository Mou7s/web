<template>
  <div
    aria-label="container"
    class="flex justify-center min-h-screen dark:bg-black dark:text-white"
  >
    <div>
      <p class="text-3xl Transition font-serif hover:text-green-500">
        viteStarter
      </p>
    </div>
  </div>
</template>
<script setup>
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
</script>
