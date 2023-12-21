function buyChoco(prices: number[], money: number): number {
  let min = Math.min(prices[0], prices[1])
  let secondMin = Math.max(prices[0], prices[1])

  for (let i = 2; i < prices.length; i++) {
    const curr = prices[i]

    if (curr < min) {
      secondMin = min
      min = curr
    } else if (curr < secondMin) {
      secondMin = curr
    }
  }

  const total = money - min - secondMin
  return total < 0 ? money : total
};
