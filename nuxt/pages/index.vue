<script setup lang="ts">
import '@material/web/all';

useSeoMeta({
  title: 'Mou7space',
  ogTitle: 'Mou7space',
  description: 'This is personal website of mou7s, welcome!',
  ogDescription: 'This is personal website of mou7s, welcome!',
});

const isSidebarOpen = ref(false);
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
  />
  <div class="bg-blue-100 min-h-screen">
    <header class="grid grid-flow-col place-content-between">
      <div class="grid grid-flow-col items-center">
        <md-text-button @click="isSidebarOpen = !isSidebarOpen">
          <span class="material-symbols-outlined"> menu </span>
        </md-text-button>
        <div>Mou7space</div>
      </div>

      <div><md-text-button>Dark</md-text-button></div>
    </header>

    <main>
      <div v-if="isSidebarOpen" class="h-screen grid grid-cols-6">
        <nav class="grid">
          <Button> <NuxtLink to="/">Home</NuxtLink> </Button
          ><Button> <NuxtLink to="/blog">Blog</NuxtLink> </Button>
          <Button> <NuxtLink to="/about">About</NuxtLink> </Button>
          <Button
            ><NuxtLink to="'https://www.github.com/mou7s'"
              ><var-icon name="github" /></NuxtLink
          ></Button>
        </nav>
        <div
          class="col-span-5 bg-white min-h-screen rounded-3xl text-9xl text-center"
        >
          Welcome
        </div>
      </div>

      <div
        v-else
        class="bg-white min-h-screen rounded-3xl text-9xl text-center"
      >
        Welcome
      </div>
    </main>
  </div>
</template>
