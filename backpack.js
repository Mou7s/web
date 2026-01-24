function knapsack(weights, values, capacity) {
  const n = weights.length;
  // dp[i][j] represents the maximum value of the first i items with a capacity of j
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i - 1] + dp[i - 1][j - weights[i - 1]],
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][capacity];
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 8;

const maxTotalValue = knapsack(weights, values, capacity);
console.log(maxTotalValue); // Output: 9
