// O(2n)
function minOperations1(s: string): number {
  let operations1 = 0
  let operations2 = 0
  let char = '1'

  for (let i = 0; i < s.length; i++) {
    const curr = s[i]

    if (curr !== char) {
      operations1++
    }
    char = char === '1' ? '0' : '1'
  }

  char = '0'
  for (let i = 0; i < s.length; i++) {
    const curr = s[i]

    if (curr !== char) {
      operations2++
    }
    char = char === '1' ? '0' : '1'
  }

  return Math.min(operations1, operations2)
};

// O(n)
function minOperations2(s: string): number {
  let operations1 = 0
  let operations2 = 0
  let char = '1'

  for (let i = 0; i < s.length; i++) {
    const curr = s[i]

    if (curr !== char) {
      operations1++
    } else {
      operations2++
    }
    char = char === '1' ? '0' : '1'
  }

  return Math.min(operations1, operations2)
};

// O(n) one less var
function minOperations(s: string): number {
  let operations = 0
  let char = '0'

  for (let i = 0; i < s.length; i++) {
    const curr = s[i]

    if (curr !== char) {
      operations++
    }
    char = char === '1' ? '0' : '1'
  }

  return Math.min(operations, s.length - operations)
};
