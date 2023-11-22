<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>Parent Component</h1>
    <p>Parent Data: {{ parentData }}</p>
    <ChildComponent />
  </div>
</template>

<script >
import ChildComponent from '../components/ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const parentData = ref('Hello from Parent');

    // 使用 provide 将数据提供给子组件
    provide('parentData', parentData);

    return {
      parentData,
    };
  },
};
</script>
