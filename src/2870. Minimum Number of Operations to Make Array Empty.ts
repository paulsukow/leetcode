// O(n)
function minOperations1(nums: number[]): number {
  const instanceMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const mappedValue = instanceMap.get(num) ?? 0
    instanceMap.set(num, mappedValue + 1)
  }

  let operations = 0
  const values = Array.from(instanceMap.values())
  for (let i = 0; i < values.length; i++) {
    let value = values[i]
    while (value > 0) {
      if (value === 1) {
        return -1
      }

      if (value >= 5 || value === 3) {
        value -= 3
      } else {
        value -= 2
      }

      operations++
    }

  }

  return operations
};

// cleaned up. From editorial: If you write out the operations from 2 to 12, the answer for each amount/3 rounded up or Math.ceil(amount/3)
function minOperations(nums: number[]): number {
  const instanceMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const mappedValue = instanceMap.get(num) ?? 0
    instanceMap.set(num, mappedValue + 1)
  }

  let operations = 0
  for (let value of instanceMap.values()) {
    if (value === 1) {
      return -1
    }

    operations += Math.ceil(value / 3)
  }

  return operations
};
