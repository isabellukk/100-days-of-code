// ----- Integer to Roman----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/integer-to-roman/description/

var intToRoman = function (num) {
  let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    romanNumerals = '';

  for (let i in roman) {
    while (num >= roman[i]) {
      romanNumerals += i;
      num -= roman[i];
    }
  }
  return romanNumerals;
};

let num = 3;
// Expected Output: "III"

console.log(intToRoman(num));
