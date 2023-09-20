<script setup lang="ts">
function findMaxFrequency(nums: number[]): {
  element: number;
  indexes: number[];
} {
  const map = new Map();
  let maxFrequency = 0;
  let mostFrequent = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], { count: 1, indexes: [i] });
    } else {
      const entry = map.get(nums[i]);
      entry.count += 1;
      entry.indexes.push(i);
      map.set(nums[i], entry);
    }

    if (map.get(nums[i]).count > maxFrequency) {
      maxFrequency = map.get(nums[i]).count;
      mostFrequent = nums[i];
    } else if (map.get(nums[i]).count === maxFrequency) {
      if (nums[i] < mostFrequent) {
        mostFrequent = nums[i];
      }
    }
  }

  return { element: mostFrequent, indexes: map.get(mostFrequent).indexes };
}

const nums = [1, 2, 3, 4, 1, 1, 1, 1, 1];

let result = findMaxFrequency(nums); // 输出: { element: 1, indexes: [0, 4, 5, 6, 7, 8] }
</script>

<template>
  {{ result }}
</template>
