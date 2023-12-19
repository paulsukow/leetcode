const createRange = (start: number, end: number): string => start === end ? `${start}` : `${start}->${end}`

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 1) {
    return nums.map((num) => `${num}`)
  }

  const ranges = []
  let start = nums[0]
  let end = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i]

    if (curr === end + 1) {
      end = curr
    } else {
      const range = createRange(start, end)
      ranges.push(range)
      start = curr
      end = curr
    }

    const isEnd = i === nums.length - 1
    if (isEnd) {
      const range = createRange(start, end)
      ranges.push(range)
    }
  }

  return ranges
};
