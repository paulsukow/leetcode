function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true
  }

  let maxDistance = 0

  for (let i = 0; i < nums.length - 1; i++) {
    const currJumpDist = nums[i]

    if (currJumpDist > maxDistance) {
      maxDistance = currJumpDist
    }

    if (maxDistance === 0) {
      return false
    }

    maxDistance--
  }

  return true
};
