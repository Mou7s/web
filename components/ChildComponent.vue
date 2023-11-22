<!-- ChildComponent.vue -->
<template>
  <div>
    <h2>Child Component</h2>
    <p>Received from Parent: {{ receivedData }}</p>
    <button @click="updateParentData">Update Parent Data</button>
  </div>
</template>

<script>
export default {
  setup() {
    // 使用 inject 获取父组件提供的数据
    const parentData = inject('parentData', ref('Default Data'));
    const receivedData = ref(parentData);

    const updateParentData = () => {
      // 子组件通过触发事件通知父组件更新数据
      parentData.value = 'Updated Data from Child';
      receivedData.value = parentData.value;
    };

    return {
      receivedData,
      updateParentData,
    };
  },
};
</script>
