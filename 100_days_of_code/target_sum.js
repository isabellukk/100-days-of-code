// ----- Target Sum ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/target-sum/description/

var findTargetSumWays = function (nums, target) {
  let ans = 0;
  const stack = [[0, 0]];
  while (stack.length) {
    const [pos, sum] = stack.pop();
    if (pos !== nums.length) {
      stack.push([pos + 1, sum + nums[pos]]);
      stack.push([pos + 1, sum - nums[pos]]);
      continue;
    } else if (sum === target) {
      ans++;
    }
  }
  return ans;
};

let nums = [1, 1, 1, 1, 1],
  target = 3;
// Expected Output: 5

console.log(findTargetSumWays(nums, target));
