// ----- Koko Eating Bananas----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/koko-eating-bananas/description/

var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let k = -1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    const numOfHours = piles.reduce(
      (total, pile) => total + Math.ceil(pile / mid),
      0
    );

    if (numOfHours <= h) {
      k = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return k;
};

let piles = [3, 6, 7, 11];
let h = 8;
// Expected Output: 4

console.log(minEatingSpeed(piles, h));
