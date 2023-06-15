// ----- Add Strings ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/add-strings/description/

var addStrings = function (num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
};

let num1 = '11';
let num2 = '123';
// Expected Output: "134"

console.log(addStrings(num1, num2));
