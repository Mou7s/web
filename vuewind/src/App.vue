<script setup lang="ts">
import { ref } from 'vue';

const todolist = ref(['learn mongoose']);
const ongoing = ref(['learn vue']);
const completed = ref(['learn html', 'learn css']);

const inputvalue = ref('');

const addtodo = () => {
  if (inputvalue.value) {
    todolist.value.push(inputvalue.value.trim());
    inputvalue.value = ''; // 添加后清空输入框的值
  }
};

const addongoing = (todo: string, index: number) => {
  ongoing.value.push(todo);
  todolist.value.splice(index, 1);
};

const addcompleted = (item: string, index: any) => {
  completed.value.push(item);
  ongoing.value.splice(index, 1);
};
</script>

<template>
  <div
    class="grid grid-cols-3 place-content-center w-full h-screen text-center"
  >
    <!-- Todo 列表 -->

    <div>
      <h1 class="text-3xl text-cyan-200">Todo</h1>
      <div class="relative">
        <input
          class="w-full text-center rounded-full border"
          v-model="inputvalue"
          placeholder="input here to add a new task"
        />
        <button
          class="absolute right-0 bg-cyan-700 w-6 rounded-full"
          @click="addtodo()"
        >
          +
        </button>
      </div>

      <div v-for="(todo, index) of todolist" :key="index">
        <div class="relative">
          <span>{{ todo }}</span>

          <button
            class="absolute right-0 bg-cyan-700 w-6 rounded-full"
            @click="addongoing(todo, index)"
          >
            =>
          </button>
        </div>
      </div>
    </div>
    <!-- 进行中列表 -->

    <div class="w-full">
      <h1 class="text-3xl mb-8 text-cyan-200">ongoing</h1>

      <div v-for="(item, index) of ongoing" :key="index">
        <div class="relative">
          <span>{{ item }}</span>
          <button
            class="absolute right-0 bg-cyan-700 w-6 rounded-full"
            @click="addcompleted(item, index)"
          >
            =>
          </button>
        </div>
      </div>
    </div>
    <!-- 已完成列表 -->

    <div>
      <h1 class="text-3xl mb-8 text-cyan-200">completed</h1>
      <div v-for="item of completed">
        <div class="relative">
          <del>
            <span>{{ item }}</span>
          </del>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
