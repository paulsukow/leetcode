function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const charMap = new Map()
  s.split('').forEach((l) => {
    const currentMapValue = charMap.get(l) ?? 0
    charMap.set(l, currentMapValue + 1)
  })

  const tChars = t.split('')

  for (let i = 0; i < tChars.length; i++) {
    const char = tChars[i]
    const currentMapValue = charMap.get(char) ?? 0
    const newMapValue = currentMapValue - 1

    if (newMapValue < 0) {
      return false
    }

    charMap.set(char, newMapValue)
  }

  return true
};
