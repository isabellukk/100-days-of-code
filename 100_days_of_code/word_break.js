// ----- Word Break ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/word-break/description/

var wordBreak = function (s, wordDict) {
  let dict = new Set(wordDict);
  let visited = new Set();
  let position = [0];

  while (position.length > 0) {
    let currentIndex = position.shift();
    if (!visited.has(currentIndex)) {
      for (let i = currentIndex; i < s.length; i++) {
        let subString = s.slice(currentIndex, i + 1);
        if (dict.has(subString)) {
          if (i === s.length - 1) {
            return true;
          }
          position.push(i + 1);
        }
      }
      visited.add(currentIndex);
    }
  }
  return false;
};

let s = 'leetcode';
let wordDict = ['leet', 'code'];
// Expected Output: true

console.log(wordBreak(s, wordDict));
