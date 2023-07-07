// ----- Remove K Digits ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/remove-k-digits/description/

var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack[stack.length - 1] > num[i] && k) stack.pop(), k--;
    stack.push(num[i]);
    if (stack.length === 1 && stack[0] === '0') stack.pop();
    while (i === num.length - 1 && k) stack.pop(), k--;
  }

  return stack.length !== 0 ? stack.join('') : '0';
};

let num = '1432219';
let k = 3;
// Expected Output: "1219"

console.log(removeKdigits(num, k));
