<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <p>{{ data }}</p>
</template>
