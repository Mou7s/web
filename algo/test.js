export class Solution {
  /**
   * @param array: An array.
   * @return: An integer.
   */
  findNumber(array) {
    // Count the occurrences of each number
    const countMap = array.reduce(
      (map, num) => map.set(num, (map.get(num) || 0) + 1),
      new Map()
    );

    // Find the number with the maximum count
    const [result] = Array.from(countMap).sort(
      ([num1, count1], [num2, count2]) => {
        if (count1 !== count2) {
          return count2 - count1;
        } else {
          return num1 - num2;
        }
      }
    );

    return result;
  }
}
