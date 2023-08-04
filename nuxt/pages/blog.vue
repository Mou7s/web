<script setup lang="ts">
import Nav from './nav.vue';
</script>

<template>
  <div class="grid grid-cols-5">
    <Nav></Nav>
    <div class="bg-blue-100 min-h-screen col-span-4">
      <div class="grid h-16">
        <var-breadcrumbs>
          <NuxtLink to="/"><var-breadcrumb></var-breadcrumb></NuxtLink>
          <NuxtLink to="/blog"><var-breadcrumb>blog</var-breadcrumb></NuxtLink>
        </var-breadcrumbs>
      </div>

      <div class="rounded-full bg-white w-5/6 my-0 mx-auto">
        <h1 class="font-bold text-2xl py-4 px-8 hover:text-blue-200">
          如何使用throttleStop
        </h1>
        <p class="py-4 px-8">
          ThrottLestop是一个小型应用程序，旨在监视和纠正许多笔记本电脑上使用的CPU性能配置。
        </p>
      </div>
    </div>
  </div>
</template>
