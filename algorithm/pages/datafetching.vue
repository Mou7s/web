<script setup>
const { data } = await useFetch('https://api.nuxtjs.dev/mountains');
</script>

<template>
  <div>
    <p>Result of <code>/api/hello</code>:</p>
    <p>{{ data }}</p>
  </div>
</template>
