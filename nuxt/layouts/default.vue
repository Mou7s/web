<template>
  <UButton @click="setPageLayout('debounce')">debounce</UButton>
  <UButton @click="setPageLayout('test')"> test</UButton>
  <UButton @click="setPageLayout('closure')"> closure</UButton>
  <UButton @click="setPageLayout('async')"> async</UButton>
</template>
<script setup></script>
