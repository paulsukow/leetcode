function isHappy(n: number): boolean {
  const calcNewValue = (num: number): number => {
    return `${num}`.split('')
      .reduce((acc, curr) => {
        const parsed = parseInt(curr)
        return acc + parsed * parsed
      }, 0)
  }

  const hasBeenCalculatedSet = new Set()

  while (n !== 1) {
    if (hasBeenCalculatedSet.has(n)) {
      return false
    }
    hasBeenCalculatedSet.add(n)

    n = calcNewValue(n)
  }

  return true
};
