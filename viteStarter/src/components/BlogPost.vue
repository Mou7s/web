<script setup>
const props = defineProps(['title']);
</script>

<template>
  <p class="font-serif text-2xl">{{ props.title }}</p>
  <button @click="$emit('enlarge-text')">Enlarge text</button>
</template>
