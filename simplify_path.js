// ----- Simplify Path ----- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/simplify-path/

var simplifyPath = function (path) {
  let simplePath = [];
  let dirs = path.split('/');
  for (let dir of dirs) {
    if (dir === '' || dir === '.') continue;
    dir === '..' ? simplePath.pop() : simplePath.push(dir);
  }
  return '/' + simplePath.join('/');
};

let path = '/home/';
// Expected Output: "/home"

console.log(simplifyPath(path));
