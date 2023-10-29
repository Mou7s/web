<template>
  <div
    class="min-h-screen dark:bg-neutral-900 dark:text-neutral-100 grid place-content-center"
  >
    <div>
      <input type="number" v-model="num1" class="p-2 border rounded-md" />
      <input type="number" v-model="num2" class="p-2 border rounded-md" />
    </div>
    <div class="mt-4">
      <button
        @click="operator = 'add'"
        class="p-2 bg-blue-500 text-white rounded-md mr-2"
      >
        +
      </button>
      <button
        @click="operator = 'subtract'"
        class="p-2 bg-blue-500 text-white rounded-md mr-2"
      >
        -
      </button>
      <button
        @click="operator = 'multiply'"
        class="p-2 bg-blue-500 text-white rounded-md mr-2"
      >
        *
      </button>
      <button
        @click="operator = 'divide'"
        class="p-2 bg-blue-500 text-white rounded-md mr-2"
      >
        /
      </button>
    </div>
    <div class="mt-4">Result: {{ result }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 定义响应式数据
const num1 = ref(0);
const num2 = ref(0);
const operator = ref('add');

// 定义计算逻辑
const result = computed(() => {
  const strategies = {
    add: function (num1, num2) {
      return num1 + num2;
    },
    subtract: function (num1, num2) {
      return num1 - num2;
    },
    multiply: function (num1, num2) {
      return num1 * num2;
    },
    divide: function (num1, num2) {
      return num1 / num2;
    },
  };
  return strategies[operator.value](num1.value, num2.value);
});
</script>

<style scoped>
input {
  background-color: black;
}
</style>
