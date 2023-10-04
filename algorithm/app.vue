<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});
</script>

<template>
  <div>
    <!-- Show Nuxt progress indicator on page change -->
    <NuxtLoadingIndicator />
    <main
      class="dark:bg-neutral-800 dark:text-neutral-100 grid place-content-center min-h-screen"
    >
      <NuxtPage />
    </main>
  </div>
</template>
