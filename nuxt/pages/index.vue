<!--
我们可以通过 v-if 和 v-for 指令条件性地或循环地渲染内容。
-->

<script setup>
const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
  <div class="grid grid-flow-col">
    <button @click="show = !show">Toggle List</button>
    <button @click="list.push(list.length + 1)">Push Number</button>
    <button @click="list.pop()">Pop Number</button>
    <button @click="list.reverse()">Reverse List</button>
  </div>

  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>
