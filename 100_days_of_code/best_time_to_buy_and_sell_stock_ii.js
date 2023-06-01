// ----- Best Time to Buy and Sell Stock II ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

var maxProfit = function (prices) {
  let max = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    if (prices[i] - minPrice > 0) {
      max += prices[i] - minPrice;
      minPrice = prices[i];
    }
  }
  return max;
};

let prices = [7, 1, 5, 3, 6, 4];
// Expected Output: 7

console.log(maxProfit(prices));
