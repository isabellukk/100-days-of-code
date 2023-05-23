// ----- Valid Number ----- //

// Difficulty: Hard
// Link: https://leetcode.com/problems/valid-number/description/

var isNumber = function (s) {
  return !s.includes('I') && !isNaN(s);
};

s = '0';
Output: true;

console.log(isNumber(s));
