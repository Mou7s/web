<template></template>

<script setup>
function outer() {
  let a = 1;
  function inner() {
    console.log(a); // 1
  }
  return inner;
}

const innerFn = outer();
innerFn(); // 1
</script>
