// ----- Gas Station ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/gas-station/description/

var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    let consumption = gas[i] - cost[i];
    tank += consumption;

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }
    total += consumption;
  }
  return total < 0 ? -1 : start;
};

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
// Expected Output: 3

console.log(canCompleteCircuit(gas, cost));
