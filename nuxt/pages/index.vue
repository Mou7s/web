<!--
现在我们将元素的 attribute / property 响应式地绑定到状态上。
这个 :title 语法是 v-bind:title 的简写。
-->

<script setup>
const message = ref('Hello World!');
const isRed = ref(true);
const color = ref('green');

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green';
}
</script>

<template>
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </p>

  <!--
  除了普通字符串之外，
  class 绑定还特别支持了对象和数组
  -->
  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <!-- 
    样式绑定也支持对象和数组
    在Vue.js中，你可以使用v-bind:style或简写为:style来动态地绑定样式。
    你可以传递一个对象给:style，对象的属性名是样式名，属性值是要应用的样式值。
   -->
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<style>
.red {
  color: red;
}
</style>
