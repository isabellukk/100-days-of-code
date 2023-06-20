// ----- Repeated Substring Pattern ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/repeated-substring-pattern/

var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};

let s = 'abab';

// Expected Output: true

console.log(repeatedSubstringPattern(s));
