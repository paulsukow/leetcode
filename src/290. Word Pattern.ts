function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')

  if (pattern.length !== words.length) {
    return false
  }

  const patternMap = new Map()
  const mappedWords = new Set()

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]

    const hasBeenMappped = patternMap.has(char)

    if (hasBeenMappped) {
      if (patternMap.get(char) !== word) {
        return false
      }
    } else {
      if (mappedWords.has(word)) {
        return false
      }

      patternMap.set(char, word)
      mappedWords.add(word)
    }
  }

  return true
};
