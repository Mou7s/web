<template>
  <UButton @click="setPageLayout('debounce')">debounce</UButton>
  <UButton @click="setPageLayout('test')"> test</UButton>
  <UButton @click="setPageLayout('closure')"> closure</UButton>
  <UButton @click="setPageLayout('async')"> async</UButton>
  <UButton @click="setPageLayout('regular expression')">
    regular expression</UButton
  >
</template>
<script setup></script>
