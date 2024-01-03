// nlog(n)
function findMatrix1(nums: number[]): number[][] {
  nums.sort((a, b) => a > b ? 1 : -1)

  let value = nums[0]
  let index = 0
  let result = [[value]]
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]
    if (value === curr) {
      index++
      if (!result[index]) {
        result[index] = []
      }
    } else {
      index = 0
      value = curr

    }

    result[index].push(curr)
  }

  return result
};

// O(n)
function findMatrix(nums: number[]): number[][] {
  const freqMap = new Map()

  let result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    const lastIndex = freqMap.get(num) ?? -1
    const index = lastIndex + 1
    freqMap.set(num, index)


    if (result.length < index + 1) {
      result.push([num])
    } else {
      result[index].push(num)
    }
  }

  return result
};
