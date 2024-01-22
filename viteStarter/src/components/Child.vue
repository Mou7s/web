<template>
  <div class="border border-red-500 rounded p-4 m-4">
    <strong class="text-red-500">Error!</strong>
    <br />
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  color: #666;
  background-color: #f8f8f8;
}
</style>
