// ----- Single Number III ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/single-number-iii/

var singleNumber = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      arr.push(nums[i]);
    }
  }
  return arr;
};

nums = [1, 2, 1, 3, 2, 5];
// Expected Output: [3,5]

console.log(singleNumber(nums));
