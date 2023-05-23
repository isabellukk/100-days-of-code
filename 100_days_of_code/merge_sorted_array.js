// ----- Merge Sorted Array ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  //   return nums1.sort();
  return nums1.sort((a, b) => a - b);
};

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
// Expected Output: [1,2,2,3,5,6]

console.log(merge(nums1, m, nums2, n));
