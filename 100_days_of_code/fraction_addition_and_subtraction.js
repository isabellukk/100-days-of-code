// ----- Fraction Addition and Subtraction ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/fraction-addition-and-subtraction/description/

var gcd = function (a, b) {
  return b === 0 ? a : gcd(b, a % b);
};

var fractionAddition = function (expression) {
  const fractions = expression.match(/[-+]?\d+\/\d+/g);

  let totalNumerator = 0;
  let totalDenominator = 1;

  for (let fraction of fractions) {
    const [numerator, denominator] = fraction.split('/').map(Number);
    totalNumerator =
      totalNumerator * denominator + totalDenominator * numerator;
    totalDenominator *= denominator;

    const commonFactor = gcd(Math.abs(totalNumerator), totalDenominator);
    totalNumerator /= commonFactor;
    totalDenominator /= commonFactor;
  }

  return totalNumerator + '/' + totalDenominator;
};

let expression = '-1/2+1/2';
// Expected Output: "0/1"

console.log(fractionAddition(expression));
