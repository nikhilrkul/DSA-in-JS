let nums = [1, 1, 0, 1, 1, 1];

var findMaxConsecutiveOnes = function (nums) {
  let maximumOnes = 0;
  let consecutiveOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      consecutiveOnes++;
    } else {
      maximumOnes = Math.max(maximumOnes, consecutiveOnes);
      consecutiveOnes = 0;
    }
  }

  return Math.max(maximumOnes, consecutiveOnes);
};

console.log(findMaxConsecutiveOnes(nums));
