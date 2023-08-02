<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 text-center">
    <nav class="flex justify-around">
      <NuxtLink to="/">
        <VarButton type="primary">Home</VarButton>
      </NuxtLink>
      <NuxtLink to="/laptop">
        <VarButton>Laptop</VarButton>
      </NuxtLink>
    </nav>
  </header>

  <div class="min-h-screen">index</div>
</template>

<style>
:root {
  color-scheme: light dark;
}
</style>
