// ----- Number of Boomerangs ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/number-of-boomerangs/description/

var numberOfBoomerangs = function (points) {
  let count = 0;

  for (let i = 0; i < points.length; i++) {
    const map = {};

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;

      const distinct =
        Math.pow(points[i][0] - points[j][0], 2) +
        Math.pow(points[i][1] - points[j][1], 2);
      if (map[distinct]) count += map[distinct] * 2;

      map[distinct] ? (map[distinct] += 1) : (map[distinct] = 1);
    }
  }

  return count;
};

let points = [
  [0, 0],
  [1, 0],
  [2, 0],
];
// Expected Output: 2

console.log(numberOfBoomerangs(points));
