function romanToInt(s: string): number {
  const valueMap = new Map()
  valueMap.set('I', 1)
  valueMap.set('V', 5)
  valueMap.set('X', 10)
  valueMap.set('L', 50)
  valueMap.set('C', 100)
  valueMap.set('D', 500)
  valueMap.set('M', 1000)

  const numerals = s.split('')

  let runningValue = 0
  let sum = 0

  for (let i = 0; i < numerals.length; i++) {
    const curr = valueMap.get(numerals[i])
    const next = valueMap.get(numerals[i + 1])

    if (curr === next) {
      runningValue += curr
    } else if (curr > next || !next) {
      sum = sum + runningValue + curr
      runningValue = 0
    } else {
      runningValue = -curr
    }
  }

  return sum
};
