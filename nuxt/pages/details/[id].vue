<template>
  <div class="container">
    <h1>Details</h1>
    <p>id: {{ id }}</p>
  </div>
</template>
<script setup>
const route = useRoute();
const id = route.params.id;
</script>
