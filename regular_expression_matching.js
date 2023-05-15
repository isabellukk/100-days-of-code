// ----- Regular Expression Matching ----- //

// Difficulty: Hard
// Link: https://leetcode.com/problems/regular-expression-matching/description/

var isMatch = function (s, p) {
  return new RegExp(`^${p}$`).test(s);
};

let s = 'aa';
let p = 'a';
//Expected Output: false

console.log(isMatch(s, p));
