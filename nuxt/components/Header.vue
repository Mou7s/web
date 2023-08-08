<script setup lang="ts">
const showSidebar = ref(false);
</script>

<template>
  <header class="bg-blue-100 grid grid-flow-col place-content-between">
    <div class="grid grid-flow-col items-center">
      <md-text-button @click="showSidebar = !showSidebar">Logo</md-text-button>
      <div class="text-blue-800">
        <NuxtLink to="/">Mou7space</NuxtLink>
      </div>
    </div>
    <div><md-text-button>Dark</md-text-button></div>
  </header>
</template>
