function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((acc, cur) => {
    const wealth = cur.reduce((a,c) => a + c, 0)
    return wealth > acc ? wealth : acc
  }, 0)
};
