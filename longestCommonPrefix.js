/***
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  let longest = '';
  let firstStr = strs[0]; // flower
  let firstStrIndex = 0; // 0

  if (strs.length === 0) {
    return longest;
  }

  for (let compare of firstStr) {
    // f
    // l
    for (let i = 1; i < strs.length; i++) {
      const currentWord = strs[i];
      const currentLetter = currentWord.charAt(firstStrIndex);
      // flow
      // l
      // 1 > 4 -no   , l === l  , 1 > 6 no, f === f , l === l
      if (firstStrIndex > currentWord.length || compare !== currentLetter) {
        console.log(longest);
        return longest;
      }
    }

    longest += compare; // f
    firstStrIndex++; // 1
    // console.log(longest);
  }

  console.log(longest);
  return longest;
};

longestCommonPrefix(['flower', 'flow', 'flight']);
