function jump(nums: number[]): number {
  let jumps = 0
  let maxJumpIndex = 0
  let maxPotenitalJumpIndex = 0
  const lastIndex = nums.length - 1

  for (let i = 0; i < nums.length; i++) {
    if (maxJumpIndex >= lastIndex) {
      return jumps
    }

    const currPotentialJumpIndex = i + nums[i]
    if (currPotentialJumpIndex > maxPotenitalJumpIndex) {
      maxPotenitalJumpIndex = currPotentialJumpIndex
    }

    if (maxJumpIndex === i) {
      jumps++
      maxJumpIndex = maxPotenitalJumpIndex
      maxPotenitalJumpIndex = 0
    }

    if (maxJumpIndex === 0) {
      return -1
    }
  }
};
