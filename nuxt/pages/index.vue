<template>
  <div class="min-h-screen grid place-content-center text-3xl">
    <div :class="textColorClass" class="text-9xl font-serif">
      <h1 :class="textColor">Demo</h1>
      <button :disabled="btnDisable" @click="btnDisable = true">
        click once
      </button>
    </div>
    <select v-model="textColor">
      <option value="red">red</option>

      <option value="blue">blue</option>
    </select>
  </div>
</template>

<script setup>
const textColor = ref('red');
const btnDisable = ref(false);
</script>

<style>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
