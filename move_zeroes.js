// ----- Move Zeroes ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/move-zeroes/description/

var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right++;
    }
    left++;
  }
  while (right < nums.length) {
    nums[right] = 0;
    right++;
  }
  return nums;
};

// let nums = [0, 1, 0, 3, 12];
let nums = [0, 0, 1];

console.log(moveZeroes(nums));
