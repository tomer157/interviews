/**
 * @ param {number[]} nums
 * @ param {number} target
 * @ return {numbers[]}
 */

var twoSum = (nums, target) => {
  let numList = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const compliment = target - currentNum;

    if (numList.has(compliment)) {
      console.log([numList.get(compliment), i]);
      return [numList.get(compliment), i];
    } else {
      numList.set(currentNum, i);
    }
  }
};
twoSum([2, 7, 15, 11], 9);
