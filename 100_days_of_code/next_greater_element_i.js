// ----- Next Greater Element I----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/next-greater-element-i/description/

var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    let greaterNext = -1;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) found = true;
      if (found && nums1[i] < nums2[j]) {
        greaterNext = nums2[j];
        break;
      }
    }
    res.push(greaterNext);
  }
  return res;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
// Expected Output: [-1,3,-1]

console.log(nextGreaterElement(nums1, nums2));
