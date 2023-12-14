const findCommonPrefix = (word1, word2) => {
  let currentPrefix = ''

  if (word1 === word2) {
    return word1
  }

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      currentPrefix += word1[i]
    } else {
      return currentPrefix
    }
  }

  return currentPrefix
}


function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    const curr = strs[i]

    prefix = findCommonPrefix(prefix, strs[i])
  }

  return prefix
};
