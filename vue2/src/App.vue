<template>
  <div>
    <div class="container">
      {{ msg }}
    </div>
    <button @click="clickContainer">Click me</button>
  </div>
</template>


<script setup>
const msg = 'Welcome to Your Vue.js App'
const clickContainer = () => {
  console.log('clickContainer')
}
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  min-height: 100%;
}
</style>
