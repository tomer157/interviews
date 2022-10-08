// l       mid        r
// 1 2 3 4  5  6 7 8 9
//binary search
const isPerfectSquare = (num) => {
  if (num < 1) {
    return false;
  }

  let left = 1;
  let right = num;

  while (left <= right) {
    let midPoint = left + Math.floor((right - left) / 2);
    if (midPoint * midPoint === num) {
      console.log(midPoint);
      return true;
    } else if (midPoint * midPoint > num) {
      right = midPoint - 1;
    } else if (midPoint * midPoint < num) {
      left = midPoint + 1;
    }
  }

  return false;
};

isPerfectSquare(25);
