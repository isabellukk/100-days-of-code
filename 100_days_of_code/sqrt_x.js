// ----- Sqrt(x)----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/sqrtx/description/

var mySqrt = function (x) {
  let val = 0;
  while (val * val <= x) val++;
  return val - 1;
};

let x = 4;
// Expected Output: 2

console.log(mySqrt(x));
