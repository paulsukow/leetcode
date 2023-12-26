function totalMoney(n: number): number {
  let base = 0
  let day = 1
  let money = 0

  while (day <= n) {
    if (day % 7) {
      money += base + day % 7
    } else {
      money += base + 7
      base++
    }
    day++
  }

  return money
};
