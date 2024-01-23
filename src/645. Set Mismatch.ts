function findErrorNums(nums: number[]): number[] {
  let double
  let missing

  if (nums[0] !== 1) {
    missing = 1
  }

  if (nums[nums.length - 1] !== nums.length) {
    missing = nums.length
  }

  for (let i = 1; i < nums.length; i++) {
    const last = nums[i - 1]
    const curr = nums[i]

    if (curr - last === 2) {
      missing = last + 1
    }

    if (curr === last) {
      double = curr
    }
  }

  return [double, missing]
};
