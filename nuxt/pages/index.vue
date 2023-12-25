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

function reloadPage() {
  window.location.reload();
}

const selected = useState(() => people[0]);
//promise
c
let promise = fetch(url);

</script>
<template>
  <div class="flex m-2 gap-2 place-content-around">
    <div>
      <USelectMenu
        v-model="selected"
        :options="people"
        class="w-32"
        @change="reloadPage"
      />
    </div>
    <div class="flex-grow">
      <UInput variant="outline" placeholder="Search..." :autofocus="true" />
    </div>
    <!-- <div><UButton>刷新</UButton></div> -->
  </div>

  <div></div>
</template>
