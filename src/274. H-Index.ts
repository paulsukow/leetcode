// todo need to practice this one
function hIndex(citations: number[]): number {
  citations.sort((a,b) => a > b ? 1 : -1)

  for (let i = 0; i < citations.length; i++) {
    const curr = citations[i]
    const equalOrGreaterOccurrences = citations.length - i

    if (equalOrGreaterOccurrences === curr) {
      return curr
    }

    if (equalOrGreaterOccurrences < curr) {
      return equalOrGreaterOccurrences
    }
  }

  return 0
};
