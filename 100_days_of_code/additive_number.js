// ----- Additive Number ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/additive-number/description/

var isAdditiveNumber = function (num) {
  const len = num.length;

  for (let i = 1; i <= Math.ceil(len / 2); i++) {
    if (num[0] === '0' && i > 1) {
      break;
    }

    const num1 = BigInt(num.substring(0, i));

    for (let j = i + 1; j < len; j++) {
      if (num[i] === '0' && j > i + 1) {
        break;
      }

      const num2 = BigInt(num.substring(i, j));

      if (isAdditiveSequence(num1, num2, j)) {
        return true;
      }
    }
  }

  return false;
};

function isAdditiveSequence(num1, num2, start) {
  const target = (num1 + num2).toString();
  let currentIndex = start;

  while (currentIndex < num.length) {
    const sum = (num1 + num2).toString();

    if (!num.startsWith(sum, currentIndex)) {
      return false;
    }

    currentIndex += sum.length;
    num1 = num2;
    num2 = BigInt(sum);

    if (currentIndex === num.length) {
      return true;
    }
  }

  return false;
}

let num = '112358';
// Expected Output: true

console.log(isAdditiveNumber(num));
