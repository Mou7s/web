<template>
  <view class="grid place-content-center min-h-screen  gap-4">
    <image class="h-48 w-48 mx-auto" src="../static/logo.png" aria-label="logo"></image>
    <view class="flex justify-center" aria-label="text-area">
      <p class="text-9xl font-serif Transition hover:text-green-500" aria-label="title">{{ title }}</p>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Hello Uniapp');
</script>
