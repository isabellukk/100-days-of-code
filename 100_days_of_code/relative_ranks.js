// ----- Relative Ranks ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function (score) {
  const ranks = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal',
  };
  const hashmap = {};
  const sortScore = [...score].sort((a, b) => b - a);
  let output = [];

  for (let i = 0; i < sortScore.length; i++) {
    hashmap[sortScore[i]] = ranks[`${i + 1}`] || `${i + 1}`;
  }

  for (let i = 0; i < score.length; i++) {
    output.push(hashmap[score[i]]);
  }

  return output;
};

let score = [5, 4, 3, 2, 1];
// Expected Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

console.log(findRelativeRanks(score));
