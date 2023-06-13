// ----- Intersection of Two Arrays ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/intersection-of-two-arrays/description/

var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  return nums2.filter((num) => nums1.delete(num));
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

// Expected Output: [2];

console.log(intersection(nums1, nums2));
