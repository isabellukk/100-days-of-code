// ----- Combination Sum ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/combination-sum/description/

var combinationSum = function (candidates, target) {
  let ans = [];
  let temp = [];
  let iterate = (index, sum) => {
    if (sum > target) return;
    if (sum === target) {
      ans.push([...temp]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      temp.push(candidates[i]);
      iterate(i, sum + candidates[i]);
      temp.pop();
    }
  };
  iterate(0, 0);
  return ans;
};

let candidates = [2, 3, 6, 7];
let target = 7;
// Expected Output: [[2,2,3],[7]]

console.log(combinationSum(candidates, target));
