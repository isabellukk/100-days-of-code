// ----- Perfect Squares ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/perfect-squares/description/

var numSquares = function (n) {
  while (n % 4 == 0) {
    n /= 4;
  }
  if (n % 8 == 7) return 4;
  for (let a = 0; a * a <= n; a++) {
    let b = Math.floor(Math.sqrt(n - a * a));
    if (a * a + b * b == n) return !!a + !!b;
  }
  return 3;
};

let n = 12;
// Expected Output: 3

console.log(numSquares(n));
