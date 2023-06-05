// ----- Search Insert Position ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function (nums, target) {
  let numbers = nums.concat(target).sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
    return numbers.indexOf(target);
  }
  return numbers;
};
let nums = [1, 3, 5, 6];
let target = 2;

console.log(searchInsert(nums, target));
