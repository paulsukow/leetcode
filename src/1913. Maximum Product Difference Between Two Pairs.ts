// O(nlogn)
function maxProductDifference1(nums: number[]): number {
  nums.sort((a, b) => a > b ? 1 : -1)
  let max = nums[nums.length - 1]
  let secondMax = nums[nums.length - 2]
  let min = nums[0]
  let secondMin = nums[1]

  return max * secondMax - min * secondMin
};

// O(n)? sort the first four is constant most times I think, but if nums.length === 4 then the whole thing would be O(nlogn)
function maxProductDifference2(nums: number[]): number {
  const firstFour = nums.slice(0, 4).sort((a, b) => a > b ? 1 : -1)
  let max = firstFour.pop()
  let secondMax = firstFour.pop()
  let secondMin = firstFour.pop()
  let min = firstFour.pop()

  for (let i = 4; i < nums.length; i++) {
    const curr = nums[i]
    if (curr > max) {
      secondMax = max
      max = curr
    } else if (curr > secondMax) {
      secondMax = curr
    }

    if (curr < min) {
      secondMin = min
      min = curr
    } else if (curr < secondMin) {
      secondMin = curr
    }
  }

  return max * secondMax - min * secondMin
};

// a little more performant O(n)
function maxProductDifference(nums: number[]): number {
  let max = 0
  let secondMax = 0
  let secondMin = Infinity
  let min = Infinity

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    if (curr > max) {
      secondMax = max
      max = curr
    } else if (curr > secondMax) {
      secondMax = curr
    }

    if (curr < min) {
      secondMin = min
      min = curr
    } else if (curr < secondMin) {
      secondMin = curr
    }
  }

  return max * secondMax - min * secondMin
};
