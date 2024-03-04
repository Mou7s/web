<template>
  <div class="flex justify-end items-center min-h-screen">
    <div>
      <p>{{ count }}</p>
      <UButton @click="add">add</UButton>
    </div>
  </div>
</template>
<script setup>
import { count } from '../composables/data';
import { add } from '../composables/data';
</script>
