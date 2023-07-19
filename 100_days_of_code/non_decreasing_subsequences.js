// ----- Non-decreasing Subsequences ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/non-decreasing-subsequences/description/

var findSubsequences = function (nums) {
  const result = [];
  const generateSubsequences = (startIndex, currSubsequence) => {
    if (currSubsequence.length > 1) {
      result.push([...currSubsequence]);
    }
    const used = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue;
      }
      if (
        currSubsequence.length === 0 ||
        currSubsequence[currSubsequence.length - 1] <= nums[i]
      ) {
        used.add(nums[i]);
        currSubsequence.push(nums[i]);
        generateSubsequences(i + 1, currSubsequence);
        currSubsequence.pop();
      }
    }
  };
  generateSubsequences(0, []);
  return result;
};
let nums = [4, 6, 7, 7];
// Expected Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

console.log(findSubsequences(nums));
