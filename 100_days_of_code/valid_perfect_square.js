// ----- Valid Perfect Square ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/valid-perfect-square/description/

var isPerfectSquare = function (num) {
  return num ** 0.5 == parseInt(num ** 0.5);
};

let num = 16;
// Expected Output: true

console.log(isPerfectSquare(num));
