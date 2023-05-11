// ----- Top K Frequent Elements ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ? map[nums[i]] : 0) + 1;
  }
  let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sorted.slice(0, k).map(Number);
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
// Expected Output: [1,2]

console.log(topKFrequent(nums, k));
