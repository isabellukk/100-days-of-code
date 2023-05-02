var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const leftHeight = height[left];
    const rightHeight = height[right];
    const smallerHeight = Math.min(leftHeight, rightHeight);
    const storedWater = width * smallerHeight;

    maxWater = Math.max(storedWater, maxWater);
    leftHeight <= rightHeight ? left++ : right--;
  }

  return maxWater;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Expected Output: 49

console.log(maxArea(height));
