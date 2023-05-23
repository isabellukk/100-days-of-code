// ----- Find Minimum in Rotated Sorted Array II ----- //

// Difficulty: Hard
// Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

var findMin = function (nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};
let nums = [1, 3, 5];
// Expected Output: 1

console.log(findMin(nums));
