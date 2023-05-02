// ----- Two Sum ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let second = nums.indexOf(target - nums[i], i + 1);
    if (second > i) {
      return [i, second];
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
// Expected Output: [0,1]

console.log(twoSum(nums, target));
