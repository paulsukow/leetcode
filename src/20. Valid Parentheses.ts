function isValid(s: string): boolean {
  if (s.length === 0) {
    return false
  }

  if (s.length % 2) {
    return false
  }

  const chars = s.split('')

  const openChars = new Set(['[', '{', '('])
  const closeChars = new Set(['}', ']', ')'])
  const pairMap = new Map()
  pairMap.set('{', '}')
  pairMap.set('(', ')')
  pairMap.set('[', ']')

  const first = chars[0]
  const last = chars[chars.length - 1]

  if (closeChars.has(first)) {
    return false
  }

  if (openChars.has(last)) {
    return false
  }

  let opened = []

  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i]
    if (openChars.has(curr)) {
      opened.push(curr)
    } else {
      const matchingBracket = opened.pop()
      const isWrongClose = pairMap.get(matchingBracket) !== curr
      if (isWrongClose) {
        return false
      }
    }
  }

  return !opened.length;
};
