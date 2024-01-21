<script setup>
import { ref } from 'vue';

const currentTab = ref('Home');

const tabs = {
  Home,
  Posts,
  Archive,
};
</script>

<template>
  <div
    class="border border-gray-100 rounded py-4 px-8 mt-1 mb-10 select-none overflow-x-auto"
  ></div>
</template>
