// O(n)
function twoSum1(numbers: number[], target: number): number[] {
  const valueMap = new Map()

  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i]
    const matchingValue = target - curr

    if (valueMap.has(matchingValue)) {
      return [valueMap.get(matchingValue) + 1, i + 1]
    }

    valueMap.set(curr, i)
  }

  return []
};

// O(log(n))
function twoSum(numbers: number[], target: number): number[] {
  let index2 = numbers.length - 1

  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i]
    const matchingValue = target - curr

    while (numbers[index2] > matchingValue) {
      index2--
    }

    if (numbers[index2] === matchingValue) {
      return [i + 1, index2 + 1]
    }
  }

  return []
};
