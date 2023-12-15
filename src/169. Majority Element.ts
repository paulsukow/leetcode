function majorityElement(nums: number[]): number {
  const majorityThreshold = nums.length / 2
  const countMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const char = nums[i]
    const mapValue = countMap.get(char) ?? 0
    const charCount = mapValue + 1
    if (charCount > majorityThreshold) {
      return char
    }

    countMap.set(char, charCount)
  }

  return 0
};
