// ----- Find First and Last Position of Element in Sorted Array----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

var searchRange = function (nums, target) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let leftTarget = find(target, nums);
  if (nums[leftTarget] !== target) return [-1, -1];
  return [leftTarget, find(target + 1, nums, leftTarget) - 1];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
// Expected Output: [3,4]

console.log(searchRange(nums, target));
