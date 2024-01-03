// O(n)
function maxLengthBetweenEqualCharacters(s: string): number {
  let longest = -1
  const instanceMap = new Map()

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i]
    if (instanceMap.has(currentCharacter)) {
      longest = Math.max(longest, i - instanceMap.get(currentCharacter) - 1)
    } else {
      instanceMap.set(currentCharacter, i)
    }
  }

  return longest
};
