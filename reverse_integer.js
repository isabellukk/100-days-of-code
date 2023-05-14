// ----- Reverse Integer ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  const maxInt = 0x7fffffff;
  let reverse = +String(x < 0 ? -x : x)
    .split('')
    .reverse()
    .join('');
  if (reverse > maxInt) {
    return 0;
  }
  return x < 0 ? -reverse : reverse;
};

let x = 123;
// Expected Output: 321

console.log(reverse(x));
