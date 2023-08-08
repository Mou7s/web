<script setup lang="ts">
useSeoMeta({
  title: '如何配置Windows下的Visual Studio Code 中的 C/C++环境',
  ogTitle:
    '如何配置Windows下的Visual Studio Code 中的 C/C++环境 / C/C++ for Visual Studio Code',
  description:
    '如何配置Windows下的Visual Studio Code 中的 C/C++环境 / C/C++ for Visual Studio Code',
  ogDescription:
    '如何配置Windows下的Visual Studio Code 中的 C/C++环境 / C/C++ for Visual Studio Code',
});
</script>
<template>
  <div class="bg-blue-100 min-h-screen">
    <div class="grid h-16">
      <var-breadcrumbs>
        <NuxtLink to="/"><var-breadcrumb></var-breadcrumb></NuxtLink>
        <NuxtLink to="/blog"><var-breadcrumb>blog</var-breadcrumb></NuxtLink>
      </var-breadcrumbs>
    </div>

    <div class="rounded-3xl w-5/6 my-0 mx-auto bg-white p-10">
      <Vsc></Vsc>
    </div>
  </div>
</template>
