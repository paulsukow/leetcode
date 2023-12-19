// todo need to practice this one
function hIndex(citations: number[]): number {
  citations.sort((a,b) => a > b ? 1 : -1)
  let hIndex = 0

  for (let i = 0; i < citations.length; i++) {
    const curr = citations[i]

    if (curr === 0) {
      continue
    }

    const equalOrGreaterOccurances = citations.length - i
    if (equalOrGreaterOccurances >= curr) {
      hIndex = curr
    } else if (equalOrGreaterOccurances > hIndex) {
      hIndex = equalOrGreaterOccurances
    }
  }

  return hIndex
};
