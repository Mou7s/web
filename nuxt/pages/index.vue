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
  box-sizing: border-box;
  color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}
</style>
