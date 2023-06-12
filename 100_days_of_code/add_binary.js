// ----- Add Binary ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/add-binary/description/

var addBinary = function (a, b) {
  const binA = `0b${a}`;
  const binB = `0b${b}`;
  const sum = BigInt(binA) + BigInt(binB);
  return sum.toString(2);
};

let a = '11',
  b = '1';
// Expected Output: "100"

console.log(addBinary(a, b));
