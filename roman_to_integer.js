// ----- Roman to Integer ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/roman-to-integer

var romanToInt = function (s) {
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

let s = 'III';
// Expected Output: 3

console.log(romanToInt(s));
