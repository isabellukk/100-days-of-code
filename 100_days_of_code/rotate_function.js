// ----- Rotate Function ----- //

// Difficulty: Medium
// Link: "https://leetcode.com/problems/rotate-function/"

var maxRotateFunction = function (nums) {
  const n = nums.length;
  let sum = 0;
  let arraySum = 0;
  for (let i = 0; i < n; i++) {
    sum += i * nums[i];
    arraySum += nums[i];
  }
  let maxVal = sum;

  for (let i = n - 1; i >= 1; i--) {
    sum = sum + arraySum - n * nums[i];
    maxVal = Math.max(maxVal, sum);
  }
  return maxVal;
};

let nums = [4, 3, 2, 6];
// Expected Output: 26

console.log(maxRotateFunction(nums));
