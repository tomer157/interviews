const findNums = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let q = Math.abs(nums[i]) - 1;

    nums[q] = Math.abs(nums[q]) * -1;
    console.log(`nums[q] ${nums[q]}`);
  }

  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      results.push(nums[i] + 1);
    }
  }

  console.log(results);
};

findNums([1, 2, 4, 2]);
