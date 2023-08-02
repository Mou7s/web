<script setup lang="ts">
import Header from './header.vue';
</script>

<template>
  <Header></Header>

  <var-breadcrumbs>
    <NuxtLink to="/"><var-breadcrumb>Home</var-breadcrumb></NuxtLink>
    <NuxtLink to="/blog"><var-breadcrumb>blog</var-breadcrumb></NuxtLink>
  </var-breadcrumbs>
  some blogs
</template>
