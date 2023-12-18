<!--
 * @Author: mou7s
 * @Date: 2023-12-18 17:00:00
 * @LastEditTime: 2022-01-15 12:05:40
 * @FilePath: \project\pages\index.vue
-->

<script setup>
const people = [
  '最近',
  '全部',
  '会员管理',
  '收银管理',
  '员工管理',
  '老板报表',
  '数据分析',
  '员工提成',
  '基础资料',
  '系统管理',
  '考勤',
];

const selected = ref(people[0]);
</script>
<template>
  <div class="flex mt-2 gap-4 place-content-around">
    <div>
      <USelectMenu v-model="selected" :options="people" class="w-32" />
    </div>
    <div class="flex-grow">
      <UInput color="primary" variant="outline" placeholder="Search..." />
    </div>
    <div><UButton>刷新</UButton></div>
  </div>
</template>
