// ----- Single Number II ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/single-number-ii/

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};

let nums = [2, 2, 3, 2];
// Expected Output: 3

console.log(singleNumber(nums));
