// O(n * k)
function makeEqual(words: string[]): boolean {
  const charMap = new Map()
  let result = true

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    for (let j = 0; j < word.length; j++) {
      const char = word[j]
      const mapCount = charMap.get(char) ?? 0
      charMap.set(char, mapCount + 1)
    }
  }

  charMap.forEach((count) => {
    if (count % words.length > 0) {
      result = false
    }
  })

  return result
};
