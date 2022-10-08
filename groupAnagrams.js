/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split('').sort().join(''));
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedStrs[i]].push(strs[i]);
    }
  }

  console.log(Object.values(hash));
  return Object.values(hash);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
