<script setup lang="ts">
import '@material/web/button/text-button';
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

<template>
  <p class="text-3xl font-bold">Counter: {{ counter }}</p>

  <div class="grid justify-center grid-flow-col">
    <md-text-button @click="counter++">+</md-text-button>
    <md-text-button @click="counter--">-</md-text-button>
  </div>
</template>
