<script setup lang="ts">
const props = defineProps(['to']);
</script>

<template>
  <NuxtLink :to="props.to">
    <div
      class="rounded-full h-16 w-60 grid place-content-center hover:bg-slate-300"
    >
      <slot></slot>
    </div>
  </NuxtLink>
</template>
