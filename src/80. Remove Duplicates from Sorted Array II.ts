function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length
  }

  for (let i = 2; i < nums.length; i++) {
    const curr = nums[i]
    const twoBack =  nums[i - 2]

    if (curr === twoBack) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length

};
