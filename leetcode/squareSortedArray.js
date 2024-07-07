let nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
  let squared_array = [nums.length];

  for (let i = 0; i < nums.length; i++) {
    squared_array[i] = nums[i] * nums[i];
  }
  squared_array.sort((a, b) => a - b);
  return squared_array;
};

console.log(sortedSquares(nums));
