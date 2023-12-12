function fizzBuzz(n: number): string[] {
  const arr = []
  for(let i = 1; i <= n; i++) {
    let value = ''
    if (i % 3 === 0) {
      value += 'Fizz'
    }

    if (i % 5 === 0) {
      value += 'Buzz'
    }

    if (value.length === 0) {
      value += i
    }

    arr.push(value)
  }

  return arr
};
