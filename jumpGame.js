// non negative integers
// 0  1  2  3  4
//[2, 3, 1, 1, 4]

const canJump = (nums) => {
  let goal = nums.length - 1;

  for (let i = goal; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }

  return goal === 0 ? true : false;
};

canJump([2, 5, 0, 0]);
