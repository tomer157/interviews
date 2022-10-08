// fibonaci
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

const fibWithMemoaization = (n, memo = [undefined, 1, 1]) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  console.log(memo[n]);
  return res;
};

fibWithMemoaization(10);

// Tabulation !

const fibWithTabulation = (n) => {
  if (n <= 2) {
    return 1;
  }

  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
};

fibWithTabulation(10);
