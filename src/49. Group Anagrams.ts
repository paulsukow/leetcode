function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map()

  for (let i = 0; i < strs.length; i++) {
    const curr = strs[i]
    const anagramKey =  curr.split('').sort().join('')
    const mapValue = anagramMap.get(anagramKey)
    if (mapValue) {
      mapValue.push(curr)
    } else {
      anagramMap.set(anagramKey, [curr])
    }
  }

  return Array.from(anagramMap.values())
};
