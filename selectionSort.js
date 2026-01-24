let arr = [3, 3, 6, 2, 7, 9, 9, 3, 9, 5];

console.log('Before sorting: ', arr);

const selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log('After sorting: ', selectionSort(arr));
