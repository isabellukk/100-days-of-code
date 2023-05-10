// ----- Maximum Gap ----- //

// Difficulty: Hard
// Link: https://leetcode.com/problems/maximum-gap

var maximumGap = function (nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i + 1] - nums[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

let nums = [3, 6, 9, 1];
console.log(maximumGap(nums));
