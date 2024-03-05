let arr = [3, 3, 6, 2, 7, 9, 9, 3, 9, 5];

console.log('Before sorting: ', arr);

const bubbleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log('After sorting: ', bubbleSort(arr));
