<template>
  <div class="grid place-content-center h-screen">
    <UButton @click="setPageLayout('debounce')">debounce</UButton>
    <UButton @click="setPageLayout('test')"> test</UButton>
    <UButton @click="setPageLayout('promise')"> promise</UButton>
  </div>
</template>
<script setup></script>
