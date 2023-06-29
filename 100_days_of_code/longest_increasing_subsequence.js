// ----- Longest Increasing Subsequence ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/longest-increasing-subsequence/description/

var lengthOfLIS = function (nums) {
  let seq = Array(nums.length).fill(1);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) seq[i] = Math.max(seq[i], seq[j] + 1);
    }
  }
  return Math.max(...seq);
};

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// Expected Output: 4

console.log(lengthOfLIS(nums));
