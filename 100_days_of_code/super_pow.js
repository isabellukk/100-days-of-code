// ----- Super Pow ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/super-pow/description/

var superPow = function (a, b) {
  let bInt = BigInt(b.join('')),
    m = 1337,
    res = 1;
  a = a % m;
  while (bInt > 0) {
    if (bInt % 2n == 1) res = (res * a) % m;
    a = (a * a) % m;
    bInt = bInt >> 1n;
  }
  return res;
};

let a = 2;
let b = [3];
// Expected Output: 8

console.log(superPow(a, b));
