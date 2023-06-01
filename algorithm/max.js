//
Array.prototype.max = function () {
  let max = this[0];
  for (let i = 0; i < this.length; i++) {
    const element = [i];
    if (this[i] > max) {
      max = this[i];
    }
  }
  return max;
};
let arr = [3, 1, 2, 5, 4];
console.log(arr.max());
