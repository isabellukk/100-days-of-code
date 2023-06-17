// ----- Rotate Image ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/rotate-image/description/

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  return matrix;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Expected Output: [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate(matrix));
