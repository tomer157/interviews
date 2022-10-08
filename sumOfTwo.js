/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * Input: a = 2, b = 3
 * Output: 5
 * loop on 2 -> [, , ]
 * loop on 3 -> [, , , , ,]
 * return len of array
 */
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

var getSum = function (a, b) {
  while (b != 0) {
    let temp = (a & b) << 1;
    a = a ^ b; // using XOR
    b = temp;
  }
  console.log(a);
  return a;
};

getSum(-12, -8);
