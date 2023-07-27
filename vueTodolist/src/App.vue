<script setup lang="ts">
import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
</script>
 
<template>
  <main class="w-screen min-h-screen grid place-content-center text-center bg-cyan-50">

    <!-- container -->
    <div class="shadow rounded-3xl bg-cyan-100 py-12 px-7">
      <h1 class="my-6 text-3xl text-cyan-300 ">todolist</h1>

      <TodoAdd></TodoAdd>
      <TodoFilter></TodoFilter>
      <TodoList></TodoList>

    </div>

  </main>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>


<style scoped></style>