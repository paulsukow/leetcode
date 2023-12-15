function lengthOfLastWord(s: string): number {
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    const isSpace = char === ' '
    const isNotSpace = !isSpace

    if (count > 0 && isSpace) {
      return count
    }

    if (isNotSpace) {
      count += 1
    }
  }

  return count
};
