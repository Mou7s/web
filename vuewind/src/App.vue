<script setup lang="ts">
import { computed, ref } from 'vue';
const todolist = ref(['learn vue', 'learn javascript']);
const inputvalue = ref('');

const addtodo = () => {
  if (inputvalue.value) {
    todolist.value.push(inputvalue.value.trim());
    inputvalue.value = ''; // 添加后清空输入框的值
  }
};

const deleteTodo = (index: number) => {
  todolist.value.splice(index, 1);
};
</script>

<template>
  <div class="grid place-content-center w-full min-h-screen text-center">
    <h1 class="text-6xl">todoLists</h1>
    <div class="relative">
      <input class="rounded" v-model="inputvalue" />
      <button class="absolute right-0 bg-cyan-500 w-6" @click="addtodo()">
        +
      </button>
    </div>

    <div v-for="(todo, index) of todolist" :key="index">
      <div class="relative">
        <span>{{ todo }}</span>
        <button class="absolute right-0" @click="deleteTodo(index)">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
