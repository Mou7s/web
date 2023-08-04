<script setup lang="ts">
import Header from './header.vue';
</script>

<template>
  <Header></Header>
  <div class="bg-blue-100 min-h-screen gird">
    <div class="mx-8">
      <var-breadcrumbs>
        <NuxtLink to="/"><var-breadcrumb>Home</var-breadcrumb></NuxtLink>
        <NuxtLink to="/blog"><var-breadcrumb>blog</var-breadcrumb></NuxtLink>
      </var-breadcrumbs>
    </div>

    <div class="rounded-full bg-white w-5/6 my-0 mx-auto">
      <h1 class="font-bold text-2xl">如何使用throttleStop</h1>

      <p>
        ThrottLestop是一个小型应用程序，旨在监视和纠正许多笔记本电脑上使用的CPU性能配置。
      </p>
    </div>
  </div>
</template>
