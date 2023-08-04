<script setup lang="ts">
import '@material/web/all';
import Header from './header.vue';
import Button from './button.vue';
</script>

<template>
  <Header></Header>

  <div class="bg-blue-100 fixed w-64 h-full">
    <nav class="grid grid-flow-row w-full place-content-center">
      <Button :to="'/blog'">Blog</Button>
      <Button :to="'/projects'">Projects</Button>

      <div></div>
    </nav>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Serif+SC&display=swap');
:root {
  color-scheme: light dark;
  font-family: 'noto sans sc', system-ui;
}
</style>
