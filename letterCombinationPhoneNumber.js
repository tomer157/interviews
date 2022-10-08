/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  // global result
  const result = [];

  // alpha hash MAP
  const alpha = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // dfs recursive helper
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }

    // dfs recursive case
    let chars = alpha[digits[i]];
    console.log(chars);

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      console.log(`slate: ${slate}`);
      slate.pop();
    }
  };

  dfs(0, digits, []);

  console.log(result);
  return result;
};

letterCombinations('23');
