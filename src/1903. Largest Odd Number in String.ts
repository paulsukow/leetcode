function largestOddNumber(num: string): string {
  let index = num.length - 1
  while (!(parseInt(num[index]) % 2) && index >= 0) {
    index--
  }

  return num.substring(0, index + 1)
};
