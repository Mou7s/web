<template>
  <view class="flex flex-col items-center justify-center">
    <image
      class="h-48 w-48 mt-48 mx-auto mb-12"
      src="/static/logo.png"
      aria-label="logo"
    ></image>
    <view class="flex justify-center" aria-label="text-area">
      <text class="text-4xl text-gray-400" aria-label="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Hello Uniapp');
</script>

<style></style>
