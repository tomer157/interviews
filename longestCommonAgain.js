/**
 * @param {string[]} strs
 * @return {string}
 */

// flower
// idx = 'f' - 0
// loop the rest strings [] from idx 1
// flow - f  = thats ok, flight - f = that ok. build string = 'f'
// idx = 1 - 'l'
// loop the rest strings [] from idx 1
// flow - l, flight - l that ok. rebuild string "fl"
// strs[0] idx !== loop the rest strings [] from same idx not equal break loop

// return string build

var longestCommonPrefix = function (strs) {
  if ((strs.length === 0) | (strs[0] === '')) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  const first = strs[0];
  let idx = 0;
  let stringBuilder = '';

  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (first[i] !== strs[j].charAt(i)) {
        console.log(stringBuilder);
        return stringBuilder;
      }
    }
    stringBuilder += first[i];
  }

  console.log(stringBuilder);
  return stringBuilder;
};
