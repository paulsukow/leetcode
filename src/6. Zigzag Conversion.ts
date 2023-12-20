function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }

  let rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push([])
  }

  let increment = 1
  let row = 0
  let index = 0

  for (let i = 0; i <= s.length; i++) {
    rows[row][index] = s[i]

    if (row === 0) {
      increment = 1
    }

    if (row === numRows - 1) {
      increment = -1
    }

    row += increment

    if (increment === -1) {
      index++
    }
  }

  return rows.flat().join('')
};
