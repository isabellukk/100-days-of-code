// ----- Minimum Moves to Equal Array Elements II ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/

var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);

  let median;

  if (nums.length % 2 === 0) {
    let p = nums.length / 2;
    median = (nums[p] + nums[p - 1]) / 2;
  } else {
    let p = (nums.length + 1) / 2;
    median = nums[p - 1];
  }

  return nums.reduce((diffSum, num) => diffSum + Math.abs(median - num), 0);
};

let nums = [1, 2, 3];
// Expected Output: 2

console.log(minMoves2(nums));
