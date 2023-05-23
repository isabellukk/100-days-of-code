// ----- Remove Element ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-element

var removeElement = function (nums, val) {
  let order = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[order++] = nums[i];
    }
  }
  return order;
};

let nums = [3, 2, 2, 3];
let val = 3;
// Expected Output: 2, nums = [2,2,_,_]

console.log(removeElement(nums, val));
