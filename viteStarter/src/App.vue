<script setup>
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import Archive from './components/Archive.vue';
import { ref } from 'vue';

const currentTab = ref('Home');

const tabs = {
  Home,
  Posts,
  Archive,
};
</script>

<template>
  <div
    class="font-serif border border-gray-100 rounded-sm py-4 px-8 mt-1 mb-10 select-none overflow-x-auto"
  >
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="[
        'py-2 px-4 rounded-tr rounded-tl border border-gray-100 bg-gray-200 -mb-1 -mr-1 hover:bg-gray-200 active:bg-gray-200',
        { active: currentTab === tab },
      ]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component
      :is="tabs[currentTab]"
      class="border p-2 border-gray-100"
    ></component>
  </div>
</template>
