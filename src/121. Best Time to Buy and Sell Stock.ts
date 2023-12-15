// O(n*n)
function maxProfitOption1(prices: number[]): number {
  if (prices.length === 0 || prices.length === 1) {
    return 0
  }

  if (prices.length === 2) {
    const transaction = prices[1] - prices[0]
    return transaction > 0 ? transaction : 0
  }

  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    const buyPrice = prices[i]

    for (let j = i + 1; j < prices.length; j++) {
      const sellPrice = prices[j]
      const transaction = sellPrice - buyPrice

      if (transaction > maxProfit) {
        maxProfit = transaction
      }
    }
  }

  return maxProfit
};

// O(n)
function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]

    if (currentPrice < minPrice) {
      minPrice = currentPrice
    } else {
      const sellResult = currentPrice - minPrice
      maxProfit = maxProfit < sellResult ? sellResult : maxProfit
    }
  }

  return maxProfit
};
