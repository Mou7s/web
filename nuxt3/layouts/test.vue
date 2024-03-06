<template>{{ longestCommonPrefix(arr1) }}</template>

<script setup>
const longestCommonPrefix = () => {
  const arr1 = ['flower', 'flow', 'flight'];
  let prefix = '';

  // for (let i = 0; i < arr1[0].length; i++) {
  //   const char = arr1[0][i];

  //   for (let j = 1; j < arr1.length; j++) {
  //     if (arr1[j][i] !== char) return prefix;
  //   }
  //   prefix = prefix + char;
  // }
  // return prefix;

  for (let i = 0; i < arr1[0].length; i++) {
    const char = arr1[0][i];

    for (let j = 1; j < arr1.length; j++) {
      if (arr1[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }
  return prefix;
};
</script>
