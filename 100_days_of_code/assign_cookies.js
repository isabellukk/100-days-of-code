// ----- String Compression ---- //

// Difficulty: Easy
// Link: https://leetcode.com/problems/string-compression/description/

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0,
    res = 0;
  for (let num of s) {
    if (num >= g[j]) res++, j++;
  }
  return res;
};

let g = [1, 2, 3];
let s = [1, 1];
// Expected Output: 1

console.log(findContentChildren(g, s));
