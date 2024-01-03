// brut force nlog(n) + mlog(m) + n
// editorial shows only one result
function findContentChildren1(g: number[], s: number[]): number {
  g.sort((a, b) => a > b ? 1 : -1)
  s.sort((a, b) => a > b ? 1 : -1)
  let count = 0
  let kid = g.shift()
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= kid) {
      count++

      if (!g.length) {
        return count
      }
      kid = g.shift()
    }
  }

  return count
};

// cleaned  up
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a > b ? 1 : -1)
  s.sort((a, b) => a > b ? 1 : -1)
  let contentCount = 0
  let cookieIndex = 0
  while (cookieIndex < s.length && contentCount < g.length) {
    if (s[cookieIndex] >= g[contentCount]) {
      contentCount++
    }
    cookieIndex++
  }

  return contentCount
};
