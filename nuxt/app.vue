<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>

    <!-- 使用动态组件 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import FirstComponent from "./FirstComponent.vue";
import SecondComponent from "./SecondComponent.vue";

export default {
  data() {
    return {
      currentComponent: "FirstComponent",
    };
  },
  methods: {
    toggleComponent() {
      // 切换当前组件
      this.currentComponent =
        this.currentComponent === "FirstComponent"
          ? "SecondComponent"
          : "FirstComponent";
    },
  },
  components: {
    FirstComponent,
    SecondComponent,
  },
};
</script>
