<template>
  <p>Regular Expression</p>
  <p>str: {{ str }}</p>
  <p>regex: {{ regex }}</p>
  <p>{{ str.match(regex) }}</p>
</template>

<script setup>
const str = 'This is a string.';
const regex = /\w+/;
</script>
