function halvesAreAlike(s: string): boolean {
  const first = s.slice(0, s.length / 2)
  const second = s.slice(s.length / 2)
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toLowerCase())) {

      if (i < s.length/2) {
        count++
      } else {
        count--
      }
    }
  }

  return count === 0
};
