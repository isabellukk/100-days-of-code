var findMin = function (nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};
nums = [1, 3, 5];
console.log(findMin(nums));
