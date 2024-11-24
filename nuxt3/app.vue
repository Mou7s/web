<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    {{ solution([1, 1, 2, 2, 3, 3, 4, 5, 5]) }}
    {{ solution([0, 1, 0, 1, 2]) }}
  </div>
</template>

<script setup>
function solution(cards) {
  let map = new Map();
  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      map.delete(cards[i]);
    } else {
      map.set(cards[i], 1);
    }
  }

  for (let [key, value] of map) {
    return key;
  }

  return 0;
}

function main() {
  // Add your test cases here
  console.log(solution([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
  console.log(solution([0, 1, 0, 1, 2]) === 2);
}

main();
</script>
