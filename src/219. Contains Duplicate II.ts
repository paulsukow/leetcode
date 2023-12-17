function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) {
    return false
  }

  const valueMap = new Map()
  valueMap.set(nums[0], 0)

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i]
    const indexDiff = Math.abs(i - valueMap.get(currNum))
    if (valueMap.has(currNum) && indexDiff <=k) {
      return true
    }

    valueMap.set(currNum, i)
  }

  return false
};
