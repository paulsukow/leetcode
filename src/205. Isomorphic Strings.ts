function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  if (s.length === 1) {
    return true
  }

  const mappedChars = new Set()
  const charMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const hasBeenMapped = charMap.has(char)
    const hasNotBeenMapped = !hasBeenMapped

    const charToMapTo = t[i]
    const hasMappingCharBeenUsed = mappedChars.has(charToMapTo)

    if (hasNotBeenMapped && hasMappingCharBeenUsed) {
      return false
    }

    if (hasBeenMapped && charMap.get(char) !== charToMapTo) {
      return false
    }

    charMap.set(char, charToMapTo)
    mappedChars.add(charToMapTo)
  }

  return true
};
