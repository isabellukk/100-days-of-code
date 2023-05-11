// ----- Single Element in a Sorted Array ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/single-element-in-a-sorted-array/

var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};
let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Expected Output: 2

// let nums = [3, 3, 7, 7, 10, 11, 11];
// Expected Output: 10

console.log(singleNonDuplicate(nums));
