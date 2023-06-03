// ----- Add Digits ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/add-digits/description/

var addDigits = function (num) {
  let digits = num.toString().split('');
  while (num.length !== 1) {
    digits.map((int) => Number(int)).reduce((curr, next) => curr + next);
  }

  console.log(digits);
};

let num = 38;
// Expected Output: 2

console.log(addDigits(num));
