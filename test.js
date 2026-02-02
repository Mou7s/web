function minimumCost(nums) {
  const n = nums.length;

  // dp[i][j] 代表前i个元素分成j个子数组的最小代价
  let dp = Array.from({ length: n + 1 }, () => Array(4).fill(Infinity));

  // 初始化
  dp[0][0] = 0; // 0个元素划分为0个子数组的代价是0

  for (let i = 1; i <= n; i++) {
    // 计算划分为第1个子数组
    dp[i][1] = Math.min(dp[i - 1][1], nums[0]);

    // 计算划分为第2个子数组
    for (let k = 0; k < i; k++) {
      dp[i][2] = Math.min(dp[k][1] + nums[k], dp[i][2]);
    }

    // 计算划分为第3个子数组
    for (let k = 0; k < i; k++) {
      dp[i][3] = Math.min(dp[k][2] + nums[k], dp[i][3]);
    }
  }

  // 返回划分为3个子数组的最小代价
  return dp[n][3];
}

// 示例
const nums = [1, 2, 3];
console.log(minCost(nums)); // 输出最小代价
