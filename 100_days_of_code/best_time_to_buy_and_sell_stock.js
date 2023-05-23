// ----- Best Time to Buy and Sell Stock ----- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[left] < prices[right]) {
      let total = prices[right] - prices[left];
      max = Math.max(total, max);
    } else {
      left = right;
    }
    right++;
  }
  return max;
};

let prices = [7, 1, 5, 3, 6, 4];
// Expected Output: 5

console.log(maxProfit(prices));
