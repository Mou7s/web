<script setup>
function findMostFrequentElement(arr) {
  const elementCount = {};
  let mostFrequentElement = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (elementCount[element]) {
      elementCount[element].count++;
      elementCount[element].positions.push(i);
    } else {
      elementCount[element] = { count: 1, positions: [i] };
    }

    if (elementCount[element].count > maxCount) {
      mostFrequentElement = element;
      maxCount = elementCount[element].count;
    }
  }

  return {
    mostFrequentElement: mostFrequentElement,
    positions: elementCount[mostFrequentElement].positions,
  };
}

const array = [1, 2, 2, 3, 4, 2, 5, 6, 2];
const result = findMostFrequentElement(array);
</script>
<template>
  array:{{ array }}
  <p>most frequent element: {{ result.mostFrequentElement }}</p>
  <p>index:{{ result.positions.join(', ') }}</p>
</template>
