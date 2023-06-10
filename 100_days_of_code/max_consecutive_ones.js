// ----- Max Consecutive Ones ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function (nums) {
  let current = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      current = 0;
    }
    if (current > max) {
      max = current;
    }
  }
  return max;
};
let nums = [1, 1, 0, 1, 1, 1];

// Expected Output: 3

console.log(findMaxConsecutiveOnes(nums));
