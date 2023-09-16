<script setup>
const twoSum = (nums, target) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] != undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
};
const nums = [2, 7, 11, 15];
const target = 18;
const result = twoSum(nums, target);
</script>
<template>{{ result }}</template>
