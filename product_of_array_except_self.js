// ----- Product of Array Except Self ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  const n = nums.length;
  let ans = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    ans[i] *= nums[i];
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }

  return ans;
};

let nums = [1, 2, 3, 4];
// expected Output: [24,12,8,6]

console.log(productExceptSelf(nums));
