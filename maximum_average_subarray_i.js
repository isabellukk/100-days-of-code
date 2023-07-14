// ----- Maximum Average Subarray I---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/maximum-average-subarray-i/description/

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
// Expected Output: 12.75000

console.log(findMaxAverage(nums, k));
