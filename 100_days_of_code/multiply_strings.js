// ----- Multiply Strings ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/multiply-strings/description/

var multiply = function (num1, num2) {
  return eval(BigInt(num1) * BigInt(num2)).toString();
};
let num1 = '2',
  num2 = '3';
// Expected Output: "6"

console.log(multiply(num1, num2));
