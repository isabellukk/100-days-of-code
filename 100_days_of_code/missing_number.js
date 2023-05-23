// ----- Missing Number ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }
  return nums.length;
};

// let nums = [1];
// // Expected Output: 2

let nums = [3, 0, 1];
// // Expected Output: 2

// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Expected Output: 8

// let nums = [0,1];
// Expected Output: 2

console.log(missingNumber(nums));
