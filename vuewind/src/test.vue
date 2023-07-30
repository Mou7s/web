<script setup lang="ts">
import { ref, onMounted } from 'vue';

const child = ref(null);

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
});
</script>

<template>
  <Child ref="child" />
</template>
