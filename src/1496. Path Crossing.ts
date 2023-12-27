function isPathCrossing(path: string): boolean {
  let x = 0
  let y = 0
  let visited = new Set([`${x},${y}`])

  for (let i = 0; i < path.length; i++) {
    const dir = path[i]

    if (dir === 'N') {
      y++
    } else if (dir === 'S') {
      y--
    } else if (dir === 'W') {
      x--
    } else if (dir === 'E') {
      x++
    }

    const location = `${x},${y}`
    if (visited.has(`${x},${y}`)) {
      return true
    }

    visited.add(`${x},${y}`)
  }

  return false
};
