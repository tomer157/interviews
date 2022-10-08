const maxProfit = (prices) => {
  let minBuyPrice = Infinity;
  let maxProfitNum = 0;

  if (!prices || prices.length === 0) {
    return maxProfit;
  }

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > maxProfitNum) {
      maxProfitNum = price - minBuyPrice;
    }
  }

  console.log(maxProfitNum);
  return maxProfitNum;
};

maxProfit([7, 1, 5, 3, 6, 4]);
