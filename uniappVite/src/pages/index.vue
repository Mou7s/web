<template>
  <div class="flex justify-center items-center flex-col ">

    <div>
      <img src="../static/logo.png" alt="">
    </div>

    <div class="text-9xl hover:text-green-500 Transition">
      Uniapp
    </div>

    <div class="grid place-content-center gap-4 min-h-screen">
      <p><abbr title="aberration"> Abbr</abbr></p>
      <address><a>address:liuchuge7777777@gmail.com</a></address>
      <del>del</del>
      <ins>ins</ins>
      <kbd>kbd</kbd>
      <p><mark>mark</mark></p>
      <p>meter<meter value="0.6657"></meter></p>
      <p>progress <progress value="0.6657"></progress></p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
</script>
