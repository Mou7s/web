<template>
  <div class="dark:bg-black dark:text-white min-h-screen">
    <Header></Header>
    <main>
      <img
        @click="scrollY"
        src="./assets/images/headerBackground1.png"
        alt=""
      />
      <div class="bg-white p-16">
        <p class="title">Product Category</p>
        <hr class="w-1/12 my-0 mx-auto border-orange-600 border" />
      </div>

      <div class="bg-orange-100 p-16">
        <p class="title">Agent Brand</p>
        <hr class="w-1/12 my-0 mx-auto border-orange-600 border" />
      </div>

      <div class="bg-white p-16">
        <p class="title">Cooperative Brand</p>
        <hr class="w-1/12 my-0 mx-auto border-orange-600 border" />

        <div
          class="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <img src="./assets/images/minisoLogo.png" alt="" />
          <img src="./assets/images/huaweiLogo.png" alt="" />
          <img src="./assets/images/HLALogo.png" alt="" />
          <img src="./assets/images/vivoLogo.png" alt="" />
          <img src="./assets/images/oppoLogo.png" alt="" />
          <img src="./assets/images/oraimoLogo.png" alt="" />
          <img src="./assets/images/xiaomiLogo.png" alt="" />
          <img src="./assets/images/M&GLogo.png" alt="" />
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';

</script>

<style scoped>
.item {
  @apply w-48 h-32 bg-cyan-500;
}

.title {
  @apply text-black text-center text-5xl font-bold my-8;
}

img {
  @apply my-0 mx-auto;
}
</style>
