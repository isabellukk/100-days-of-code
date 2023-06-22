// ----- Edit Distance ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/edit-distance/description/

var minDistance = function (word1, word2) {
  let w1 = word1.length;
  let w2 = word2.length;

  let t = new Array(w1 + 1)
    .fill(Infinity)
    .map((o, i) => new Array(w2 + 1).fill(Infinity));

  for (i = 0; i <= w1; i++) {
    t[i][w2] = w1 - i;
  }

  for (j = 0; j <= w2; j++) {
    t[w1][j] = w2 - j;
  }

  for (i = w1 - 1; i >= 0; i--) {
    for (j = w2 - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        t[i][j] = t[i + 1][j + 1];
      } else {
        t[i][j] = 1 + Math.min(t[i + 1][j], t[i][j + 1], t[i + 1][j + 1]);
      }
    }
  }

  return t[0][0];
};

let word1 = 'horse';
let word2 = 'ros';
// Expected Output: 3

console.log(minDistance(word1, word2));
