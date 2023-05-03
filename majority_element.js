// ----- Majority Element ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  let hash = {};
  let majority = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = (hash[nums[i]] ? hash[nums[i]] : 0) + 1;
    if (hash[nums[i]] > majority) {
      return nums[i];
    }
  }
  return -1;
};

let nums = [3, 2, 3, 3, 4, 5, 6, 7, 3, 3, 3];
// Expected Output: 3

console.log(majorityElement(nums));
