<script setup lang="ts"></script>

<template>
  <var-app-bar>
    <template #left>
      <var-button color="transparent" text-color="#fff" text>
        <NuxtLink to="/"> <var-icon name="home" /> Home</NuxtLink>
      </var-button>
    </template>

    <template #right>
      <var-button color="transparent" text-color="#fff" text>
        <NuxtLink to="/laptop">
          <var-icon name="message-text-outline" /> Laptop</NuxtLink
        >
      </var-button>

      <var-button color="transparent" text-color="#fff" text>
        <NuxtLink to="/blog">
          <var-icon name="message-text-outline" /> Blog</NuxtLink
        >
      </var-button>
    </template>
  </var-app-bar>
</template>

<style scoped></style>
