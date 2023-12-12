<script setup>
const Sort = (array) => {
  //bubblesort
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) return array;
  }
  return array;
};
</script>

<template>{{ Sort([7, 3, 5, 5, 6, 0, 8]) }}</template>
