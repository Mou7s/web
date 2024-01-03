<template>
  <div class="min-h-screen grid place-content-center text-3xl">Hello World</div>
</template>

<script setup>
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

const example = async () => {
  console.log('Hello');
  await sleep(1000);
  console.log('World');
};
example()
</script>
