<script setup>
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 使用示例
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);
</script>

<template>
  <main
    class="dark:bg-neutral-800 dark:text-neutral-100 grid place-content-center min-h-screen"
  >
    {{ sortedArray }}
  </main>
</template>
