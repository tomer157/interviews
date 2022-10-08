/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  while (i <= r) {
    if (nums[i] === 0) {
      swap(i, l);
      l++;
      i++;
    } else if (nums[i] === 2) {
      swap(i, r);
      r--;
    } else {
      i++;
    }
  }

  console.log(nums);
  return nums;
};

sortColors([2, 0, 2, 1, 1, 0]);
