<script setup lang="ts">
import '@material/web/all';
</script>

<template>
  <div class="grid grid-cols-5 min-h-screen">
    <Nav></Nav>
    <div class="col-span-4 grid place-content-center bg-blue-100">
      <div
        class="rounded-3xl font-bold xl:bg-white xl:p-80 xl:text-9xl text-5xl"
      >
        Welcome!
      </div>
    </div>
  </div>
</template>
