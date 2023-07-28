<script setup lang="ts">
import { ref } from 'vue';
const newTodo = ref('');
const todos = ref([]);

function addTodo() {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value.trim());
    newTodo.value = '';
  }
}

function removeTodo(index: number) {
  todos.value.splice(index, 1);
}
</script>

<template>
  <main class="grid min-h-screen w-screen text-center place-content-center">
    <div id="container" class="bg-cyan-50 rounded-2xl">
      <p class="text-3xl">todo list</p>
      <div class="relative">
        <input
          type="text"
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="input here"
          class="rounded-2xl text-center"
        />
        <button
          @click="addTodo"
          class="absolute right-0 w-6 h-6 rounded-full bg-cyan-100"
        >
          +
        </button>
      </div>

      <ul>
        <div class="relative rounded-3xl">
          <li v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <button
              class="w-6 h-6 absolute right-0 rounded-full bg-cyan-100"
              @click="removeTodo(index)"
            >
              X
            </button>
          </li>
        </div>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
