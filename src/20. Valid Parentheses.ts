function isValid(s: string): boolean {
  if (s.length === 0) {
    return true
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

function isValidShorterVersion(s: string): boolean {
  const pairMap = new Map()
  pairMap.set('{', '}')
  pairMap.set('(', ')')
  pairMap.set('[', ']')

  const chars = s.split('')

  let openedBrackets = []

  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i]
    if (pairMap.has(curr)) {
      openedBrackets.push(curr)
    } else {
      if (openedBrackets.length === 0) {
        return false
      }

      const openedBracket = openedBrackets.pop()
      const isWrongClose = pairMap.get(openedBracket) !== curr
      if (isWrongClose) {
        return false
      }
    }
  }

  return !openedBrackets.length;
};
