// ----- Largest Number ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/largest-number/

var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let stringA = a.toString();
    let stringB = b.toString();
    return parseInt(stringA + stringB) > parseInt(stringB + stringA) ? -1 : 1;
  });
  if (nums[0] === 0) return '0';

  return nums.join('');
};

let nums = [3, 30, 34, 5, 9];
// Expected Output: "9534330"

console.log(largestNumber(nums));
