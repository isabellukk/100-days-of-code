// ----- String Compression ---- //

// Difficulty: Medium
// Link: https://leetcode.com/problems/string-compression/description/

var compress = function (chars) {
  let index = 0;
  let len = chars.length;
  let i = 0;
  while (i < len) {
    let j = i + 1;
    while (j < len && chars[i] == chars[j]) {
      j++;
    }
    chars[index++] = chars[i];
    let count = j - i;
    if (count > 1) {
      let str = count + '';
      for (let k = 0; k < str.length; k++) {
        chars[index++] = str[k];
      }
    }
    i = j;
  }
  return index;
};

let hars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
// Expected Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

console.log(compress(chars));
