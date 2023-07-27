<script setup lang="ts">
import TodoListItem from './TodoListItem.vue';
</script>

<template>
    <div class="grid gap-y-4 ">
        <TodoListItem v-for="n in 3" :key="n">Todo{{ n }}</TodoListItem>
    </div>
</template>
