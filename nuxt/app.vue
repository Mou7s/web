<template>
  <div>
    <h1>堆排序</h1>
    <p>排序前：{{ beforeSort }}</p>
    <p>排序后：{{ afterSort }}</p>
  </div>
</template>

<script setup>
function heapSort(arr) {
  let len = arr.length;

  // 构建大顶堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }

  // 交换堆顶元素和末尾元素，重新构造堆
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }

  return arr;
}

function heapify(arr, i, len) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, len);
  }
}
const arr = [4, 3, 8, 5, 9];

const beforeSort = arr.join(', ');
const afterSort = heapSort(arr).join(', ');

console.log(beforeSort);
console.log(afterSort);
</script>
