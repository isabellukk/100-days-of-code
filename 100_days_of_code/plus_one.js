// ----- Plus One ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let arr = [];
  let num = BigInt(digits.join('')) + 1n;
  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    let num = parseInt(numString[i]);
    arr.push(num);
  }
  return arr;
};

// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// Expected output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

let digits = [9];
// Expected Output: [1,0]

console.log(plusOne(digits));
