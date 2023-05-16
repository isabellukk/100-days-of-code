// ----- Single Number ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  let bit = 0;
  for (let i = 0; i < nums.length; i++) {
    bit = bit ^ nums[i];
  }
  return bit;
};
let nums = [-1, -1, -2];
// Expected Output: -2

console.log(singleNumber(nums));
