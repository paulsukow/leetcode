function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length ) {
    return false
  }

  if (s === t ) {
    return true
  }

  if (s.length === 0 ) {
    return true
  }

  let sIndex = 0

  for (let i = 0; i < t.length; i++) {
    const currChar = t[i]

    if (currChar === s[sIndex]) {
      sIndex++

      if (s.length === sIndex) {
        return true
      }
    }
  }

  return false
};
