<template>
  <header class="desktop fixed w-full p-4">
    <div class="flex justify-between items-center">
      <div>
        <img src="../assets/images/logoWhite.png" alt="logoWhite" />
      </div>
      <div>
        <nav>
          <ul class="hidden xl:flex justify-center items-center gap-8">
            <li>Home</li>
            <li>About Us</li>
            <li>Product Center</li>
            <li>Recruitment</li>
            <li>Co-Branding</li>
            <li>Cooperation</li>
            <li>Cantact Us</li>
            <li>Check</li>
          </ul>
        </nav>
      </div>
      <div class="flex gap-2">
        <div><img src="../assets/images/searchWhite.png" alt="" /></div>
        <div>language</div>
        <div class="block xl:hidden">trigger</div>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  li {
    cursor: pointer;
    @apply duration-300 transition-all;
s
    &:hover {
      @apply text-2xl font-bold;
    }
  }
}
</style>

<script setup>
import { computed } from 'vue';
import { isTop } from '../composables/global.vue';
</script>
