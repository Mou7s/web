<script setup lang="ts">
import '@material/web/all';
import Nav from './nav.vue';
</script>

<template>
  <div class="grid grid-cols-5 min-h-screen">
    <Nav></Nav>
    <div class="col-span-4 grid place-content-center bg-blue-100">
      <div
        class="rounded-3xl font-bold xl:bg-white xl:p-72 xl:text-9xl text-5xl"
      >
        Welcome!
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Serif+SC&display=swap');
:root {
  color-scheme: light dark;
  font-family: 'noto sans sc', system-ui;
  color: black;
}
</style>
