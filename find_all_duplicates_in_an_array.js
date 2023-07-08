// ----- Find All Duplicates in an Array ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

var findDuplicates = function (nums) {
  const hash = new Set();
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.add(nums[i]);
    } else {
      arr.push(nums[i]);
    }
  }
  return arr;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Expected Output: [2,3]

console.log(findDuplicates(nums));
