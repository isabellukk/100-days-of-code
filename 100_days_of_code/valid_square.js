// ----- Valid Square ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/valid-square/description/

var validSquare = function (p1, p2, p3, p4) {
  function distance(i, j) {
    const [x1, y1] = i;
    const [x2, y2] = j;

    return (x2 - x1) ** 2 + (y2 - y1) ** 2;
  }

  const pt = [p1, p2, p3, p4].sort(([ax, ay], [bx, by]) =>
    ax == bx ? ay - by : ax - bx
  );

  const side1 = distance(pt[0], pt[1]);
  const side2 = distance(pt[0], pt[2]);
  const side3 = distance(pt[3], pt[1]);
  const side4 = distance(pt[3], pt[2]);
  const diag1 = distance(pt[0], pt[3]);
  const diag2 = distance(pt[1], pt[2]);

  return (
    side1 &&
    diag1 &&
    side1 == side2 &&
    side2 == side3 &&
    side3 == side4 &&
    diag1 == diag2
  );
};

let p1 = [0, 0],
  p2 = [1, 1],
  p3 = [1, 0],
  p4 = [0, 1];
// Expected Output: true

console.log(validSquare(p1, p2, p3, p4));
