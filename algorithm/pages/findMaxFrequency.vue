<script setup lang="ts">
function findMaxFrequency(nums: number[]): number {
  const map = new Map();
  let maxFrequency = 0;
  let mostFrequent = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }

    if (map.get(nums[i]) > maxFrequency) {
      maxFrequency = map.get(nums[i]);
      mostFrequent = nums[i];
    } else if (map.get(nums[i]) === maxFrequency) {
      if (nums[i] < mostFrequent) {
        mostFrequent = nums[i];
      }
    }
  }

  return mostFrequent;
}

const nums = [1, 2, 3, 4, 1, 1, 1, 1, 1];

let result = findMaxFrequency(nums); // 输出: 1
</script>

<template>{{ result }}</template>
