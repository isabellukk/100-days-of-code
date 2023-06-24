// ----- Arranging Coins ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/arranging-coins/description/

var arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) {
    n -= stairs;
    stairs++;
  }
  return stairs - 1;
};

let n = 5;
// Expected Output: 2

console.log(arrangeCoins(n));
