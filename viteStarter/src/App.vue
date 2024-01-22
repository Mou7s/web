<script setup>
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
]);

const postFontSize = ref(1);
</script>

<template>
  <div
    :style="{ fontSize: postFontSize + 'em' }"
    class="grid place-content-center h-screen"
  >
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
</template>
