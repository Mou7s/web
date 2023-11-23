<script setup>
let arr = [7, 3, 5, 5, 6, 0, 8];
let len = arr.length;

const bubblesort = () => {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

const selectsort = () => {
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

const bubbleresult = bubblesort(arr);
const selectresult = selectsort(arr);
</script>
<template>
  <div>
    <p>bubble:{{ bubbleresult }}</p>
    <p>select:{{ selectresult }}</p>
  </div>
</template>
