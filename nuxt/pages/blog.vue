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

      <div class="rounded-3xl w-5/6 my-0 mx-auto bg-white p-4">
        <h1 class="font-bold text-2xl hover:text-blue-200 my-8">
          如何配置Windows下的Visual Studio Code 中的 C/C++环境
        </h1>
        <h2>1.安装C/C++插件</h2>
        <h2>设置你的C++环境</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
}
</style>
