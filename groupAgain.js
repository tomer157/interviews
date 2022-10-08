/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sorted = strs.map((word) => word.split('').sort().join());
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sorted[i]]) {
      hash[sorted[i]] = [strs[i]];
    } else {
      hash[sorted[i]].push(strs[i]);
    }
  }

  return Object.values(hash);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

//   0      1      2      3      4      5
// ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// [aet, aet, ant, aet, ant, abt]  after sorting..

// must have hashing {aet: [eat, tea, ate]}
//
