// ----- Subsets ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/subsets/description/

var subsets = function (nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
};

let nums = [1, 2, 3];
// Expected Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

console.log(subsets(nums));
