<template>
  <button @click="toggleComponent">Toggle Component</button>
  <component :is="currentComponent"></component>
</template>

<script setup>
import { ref } from "vue";

const currentComponent = ref("First");

const toggleComponent = () => {
  currentComponent.value =
    currentComponent.value === "First" ? "Second" : "First";
};
</script>
