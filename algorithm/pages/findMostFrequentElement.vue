<script setup>
// 在这里，你可以定义组件的逻辑部分，包括函数和数据。
function findMostFrequentElement(arr) {
  const elementCount = {}; // 创建一个空对象来存储元素计数和位置
  let mostFrequentElement = arr[0]; // 初始化出现次数最多的元素为数组的第一个元素
  let maxCount = 1; // 初始化最大计数为1（至少有一个元素）

  // 遍历数组，统计元素出现的次数和位置
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (elementCount[element]) {
      // 如果元素已经存在于elementCount中，则增加其计数和记录位置
      elementCount[element].count++;
      elementCount[element].positions.push(i);
    } else {
      // 否则，初始化该元素的计数和位置
      elementCount[element] = { count: 1, positions: [i] };
    }

    // 如果当前元素的计数大于最大计数，更新最多元素和最大计数
    if (elementCount[element].count > maxCount) {
      mostFrequentElement = element;
      maxCount = elementCount[element].count;
    }
  }

  // 返回包含最多元素和位置的对象
  return {
    mostFrequentElement: mostFrequentElement,
    positions: elementCount[mostFrequentElement].positions,
  };
}

const array = [1, 2, 2, 3, 4, 2, 5, 6, 2]; // 定义一个数组，这是你要分析的数据
const result = findMostFrequentElement(array); // 调用函数来计算结果
</script>

<template>
  array:{{ array }}
  <p>most frequent element: {{ result.mostFrequentElement }}</p>
  <p>index:{{ result.positions.join(', ') }}</p>
</template>
