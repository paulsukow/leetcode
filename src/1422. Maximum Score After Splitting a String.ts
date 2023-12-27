//  O(3n) reduces to O(n)
function maxScore1(s: string): number {
  const length = s.length

  const zeroCounts = [s[0] === '0' ? 1 : 0]
  for (let i = 1; i < length; i++) {
    const curr = s[i] === '0' ? 1 : 0
    zeroCounts.push(curr + zeroCounts[i - 1])
  }

  const oneCounts = [s[length - 1] === '1' ? 1 : 0]
  for (let i = length - 2; i >= 0; i--) {
    const curr = s[i] === '1' ? 1 : 0
    oneCounts.unshift(curr + oneCounts[0])
  }

  let max = 0
  for (let i = 0; i < length - 1; i++) {
    const curr = zeroCounts[i] + oneCounts[i + 1]

    if (curr > max) {
      max = curr
    }
  }

  return max
};

//  O(2n) reduces to O(n)
function maxScore2(s: string): number {
  const length = s.length

  const oneCounts = [s[length - 1] === '1' ? 1 : 0]
  for (let i = length - 2; i >= 0; i--) {
    const curr = s[i] === '1' ? 1 : 0
    oneCounts.unshift(curr + oneCounts[0])
  }

  let zeros = 0
  let max = 0
  for (let i = 0; i < length - 1; i++) {
    zeros += s[i] === '0' ? 1 : 0
    max = Math.max(max, zeros + oneCounts[i + 1])
  }

  return max
};

// O(n) single pass // todo practice this
function maxScore(s: string): number {
  const length = s.length

  let best = -Infinity
  let ones = 0
  let zeros = 0

  for (let i = 0; i < length - 1; i++) {
    if (s[i] === '1') {
      ones++
    } else {
      zeros++
    }

    best = Math.max(best, zeros - ones)
  }

  if (s[length - 1] === '1') {
    ones++
  }

  return ones + best
};
