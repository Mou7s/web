<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('App Show');
});

onUnmounted(() => {
  console.log('App Hide');
});
</script>

<style>
/*每个页面公共css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
