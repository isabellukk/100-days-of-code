// ----- Nim Game ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/nim-game/description/

var canWinNim = function (n) {
  return n % 4;
};

let n = 4;
// Expected Output: false

console.log(canWinNim(n));
