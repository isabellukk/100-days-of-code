// ----- Remove Duplicates from Sorted Array ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums;
};

let nums = [1, 1, 2];
// Expected Output: [1,2]

console.log(removeDuplicates(nums));
