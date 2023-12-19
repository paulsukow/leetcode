function maxProfit(prices: number[]): number {
  let minPrice = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i]
    if (currPrice > minPrice) {
      profit += (currPrice - minPrice)
    }

    minPrice = currPrice
  }

  return profit
};
