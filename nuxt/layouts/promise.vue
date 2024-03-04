<template></template>

<script setup>
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 1000);
});

promise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.error(err);
  });
</script>
