// ----- Power of Three----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/power-of-three/description/

var isPowerOfThree = function (n) {
  if (n < 1) return false;
  for (let i = 0; i <= n; i++) {
    let num = Math.pow(3, i);
    if (num === n) return true;
    if (num > n) return false;
  }
};

let n = 27;
// Expected Output: true

console.log(isPowerOfThree(n));
