<template>
  <div>
    <div class="container">
      {{ data }}
      <p> {{ msg }}
      </p>
    </div>
    <button @click="clickContainer">Click me</button>
    <a :href="url">
      <p>route to valve</p>
    </a>

  </div>
</template>


<script setup>
import { onMounted } from 'vue'

var data = { a: 1 }
let url = "https://www.valvesoftware.com"

const msg = 'Welcome to Your Vue.js App'
const clickContainer = () => {
  console.log('clickContainer')
}

onMounted(() => {
  url = 'https://www.google.com'
})

</script>
<style></style>
