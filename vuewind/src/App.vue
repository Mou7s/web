<script setup lang="ts">
import { computed, ref } from 'vue';
const todolist = ref(['learn vue', 'learn javascript']);
const ongoing = ref(['learn html', 'learn css']);
const inputvalue = ref('');

const addtodo = () => {
  if (inputvalue.value) {
    todolist.value.push(inputvalue.value.trim());
    inputvalue.value = ''; // 添加后清空输入框的值
  }
};

const addongoing = (todo, index) => {
  ongoing.value.push(todo);
  todolist.value.splice(index, 1);
};
</script>

<template>
  <div class="grid grid-cols-3 place-content-center w-full text-center">
    <!-- Todo 列表 -->

    <div>
      <h1 class="text-3xl">Todo</h1>
      <div class="relative">
        <input class="rounded" v-model="inputvalue" />
        <button class="absolute right-0 bg-cyan-500 w-6" @click="addtodo()">
          +
        </button>
      </div>

      <div v-for="(todo, index) of todolist" :key="index">
        <div class="relative">
          <span>{{ todo }}</span>

          <button
            class="absolute right-0 bg-cyan-500 w-6"
            @click="addongoing(todo, index)"
          >
            ->
          </button>
        </div>
      </div>
    </div>
    <!-- 进行中列表 -->

    <div class="w-full">
      <h1 class="text-3xl mb-8">ongoing</h1>

      <div v-for="(item, index) of ongoing" :key="index">
        <p>{{ item }}</p>
      </div>
    </div>
    <!-- 已完成列表 -->

    <div class="w-full text-3xl"><h1>completed</h1></div>
  </div>
</template>

<style scoped></style>
