function maxProduct(nums: number[]): number {
  let max1 = nums.pop()
  let max2 = nums.pop()

  nums.forEach((num) => {
    if (max1 > max2) {
      max2 = max2 > num ? max2 : num
    } else {
      max1 = max1 > num ? max1 : num
    }
  })

  return (max1 - 1) * (max2 - 1)
};
