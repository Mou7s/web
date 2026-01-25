const minimumDifference = (nums, k) => {
  if (k <= 1) return 0;
  const sortedNum = nums.slice().sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i <= sortedNum.length - k; i++) {
    const diff = sortedNum[i + k - 1] - sortedNum[i];
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
};
