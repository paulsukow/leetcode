function numberOfSteps(num: number): number {
  let steps = 0
  let value = num

  while (value > 0) {
    steps += 1
    if (value % 2 === 0) {
      value /= 2
    } else {
      value--
    }
  }

  return steps
};
