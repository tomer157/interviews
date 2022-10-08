/**
 * @param {number} x
 * @return {boolean}
 *
 * 
 * Given an integer x, return true if x is palindrome integer.
   An integer is a palindrome when it reads the same backward as forward.
   For example, 121 is a palindrome while 123 is not.
 
 * */
// maybe
//O nlogn time complexity
// while l <= r
// lpoint = 0    rpoint = len-1
// if pointers are equal l++ and r--
// 11211     -  11211

function isPalindrome(x) {
  if (x < 0) return false;

  let arr = [];
  while (x > 0) {
    const reminder = x % 10;
    arr.unshift(reminder);
    x = (x / 10) | 0;
  }

  console.log(arr);
  let pointLeft = 0;
  let pointRight = arr.length - 1;

  while (pointLeft <= pointRight) {
    if (arr[pointLeft] === arr[pointRight]) {
      pointLeft++;
      pointRight--;
    } else {
      console.log('fase');
      return false;
    }
  }

  return true;
}

isPalindrome(10);
