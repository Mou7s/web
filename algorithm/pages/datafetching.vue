<script setup>
const { data } = await useFetch('../server/api/hello.ts');
</script>

<template>
  <div>
    <p>Result of <code>/api/hello</code>:</p>
    <pre>{{ data }}</pre>
  </div>
</template>
