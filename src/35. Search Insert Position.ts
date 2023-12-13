function searchInsert(nums: number[], target: number): number {
  let pos = null
  let indexRef = 0

  while (pos === null) {
    const first = nums[0]
    const last = nums[nums.length - 1]
    const halfWay = Math.round(nums.length / 2)

    if (target <= first) {
      pos = indexRef
    }

    if (last === target) {
      pos = indexRef  + nums.length - 1
    }

    if (target > last) {
      pos = indexRef + nums.length
    }

    if (target < nums[halfWay]) {
      nums.splice(-halfWay, halfWay)
    } else {
      nums.splice(0, halfWay)
      indexRef += halfWay
    }
  }

  return pos
};
