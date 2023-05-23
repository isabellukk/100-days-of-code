// ----- First Missing Positive ----- //

// Difficulty: Hard
// Link: https://leetcode.com/problems/first-missing-positive

var firstMissingPositive = function (nums) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};

let nums = [1, 2, 0];
// Expected Output: 3

console.log(firstMissingPositive(nums));
