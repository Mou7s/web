<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui';
import { ref } from 'vue';

let currentTheme = null;
function toggleTheme() {
  currentTheme = currentTheme ? null : Themes.dark;
  StyleProvider(currentTheme);
}
</script>

<template>
  <header class="sticky top-0 text-center">
    <nav class="flex justify-around">
      <NuxtLink to="/">
        <VarButton>Home</VarButton>
      </NuxtLink>
      <NuxtLink to="/laptop">
        <VarButton>Laptop</VarButton>
      </NuxtLink>

      <var-button @click="toggleTheme">Theme</var-button>
    </nav>
  </header>
  <div class="min-h-screen">index</div>
</template>

<style scoped>
body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
