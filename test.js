const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length;

  while (left < right) {
    const m = (left + right) >> 1;
    if (letters[m] <= target) {
      left = m + 1;
    } else {
      right = m;
    }
  }
  return letters[left] || letters[0];
};
