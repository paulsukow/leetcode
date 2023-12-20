function productExceptSelf(nums: number[]): number[] {
  const products = []

  products[0] = 1
  for (let i = 1; i < nums.length; i++) {
    products[i] = products[i - 1] * nums[i - 1]
  }

  let missingProduct = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    missingProduct *= nums[i + 1]
    products[i] *= missingProduct
  }

  return products
};
