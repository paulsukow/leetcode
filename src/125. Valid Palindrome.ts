function isPalindromeSimple(s: string): boolean {
  if (s === '') {
    return true
  }

  if (s.trim() === '') {
    return true
  }

  const nonAlphaNumeric =/[^a-z0-9]/gi
  const sAlphaNumeric = s.replace(nonAlphaNumeric, '').toLowerCase()

  if (sAlphaNumeric === '') {
    return true
  }

  const reversed = sAlphaNumeric.split('').reverse().join('')

  return sAlphaNumeric === reversed
};

function isPalindromeForLoop(s: string): boolean {
  if (s === '') {
    return true
  }

  if (s.trim() === '') {
    return true
  }

  const nonAlphaNumeric =/[^a-z0-9]/gi
  s = s.replace(nonAlphaNumeric, '').toLowerCase()

  for (let i = 0; i < Math.round(s.length/2); i++) {
    const first = s[i]
    const last = s[s.length - 1 - i]
    if (first !== last) {
      return false
    }
  }

  return true
};

function isPalindromeWhile1(s: string): boolean {
  const isAlphaNumeric = (str) => /^[a-z0-9]/i.test(str)
  const isNotAlphaNumeric = (str) => !isAlphaNumeric(str)
  const isSpace = (str) => str === ''

  let first = 0
  let last = s.length - 1
  while (first < last) {
    const firstChar = s[first]
    const lastChar = s[last]

    if (isNotAlphaNumeric(firstChar)) {
      first++
      continue
    }

    if (isNotAlphaNumeric(lastChar)) {
      last--
      continue
    }

    if (firstChar.toLowerCase() !== lastChar.toLowerCase()) {
      return false
    }

    first++
    last--
  }

  return true
};

function isPalindromeWhile2(s: string): boolean {
  const isAlphaNumeric = (str) => /^[a-z0-9]/i.test(str)
  const isNotAlphaNumeric = (str) => !isAlphaNumeric(str)

  let first = 0
  let last = s.length - 1
  while (first < last) {
    const firstChar = s[first]
    const lastChar = s[last]

    if (isAlphaNumeric(firstChar) && isAlphaNumeric(lastChar)) {
      if (firstChar.toLowerCase() !== lastChar.toLowerCase()) {
        return false
      }

      first++
      last--
      continue
    }

    if (isNotAlphaNumeric(firstChar)) {
      first++
    }

    if (isNotAlphaNumeric(lastChar)) {
      last--
    }
  }

  return true
};
