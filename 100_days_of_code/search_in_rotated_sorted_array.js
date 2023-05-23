// ----- Search in Rotated Sorted Array ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/search-in-rotated-sorted-array/

// ---- Simple for loop to check ----//
/* var search = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] == target) return i;
    }
    return -1;
}; */

// ---- Using Binary Search ---- //
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // we know the number is on the right if the mid is greater AND the first index is greater
    // we'll set the right equal to mid + 1
    // if its
    if (
      (nums[left] <= target && target < nums[mid]) ||
      (nums[left] > nums[mid] && (target >= nums[left] || target < nums[mid]))
    ) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left] === target ? left : -1;
};

// let nums = [4, 5, 6, 7, 0, 1, 2];
// let target = 0;
// Expected Output: 4

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 6;
// Expected Output: 2

console.log(search(nums, target));
