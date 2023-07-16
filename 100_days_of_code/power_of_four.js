// ----- Power of Four----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/power-of-four/description/

var isPowerOfFour = function (n) {
  let x = Math.log(n) / Math.log(4);
  return Number.isInteger(x);
};

let n = 16;
// Expected Output: true

console.log(isPowerOfFour(n));
