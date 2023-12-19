function isPalindrome(x: number): boolean {
  const a = `${x}`
  const b = a.split('').reverse().join('')

  return a === b
};

function isPalindromeWithoutString(x: number): boolean {
  let reversed = 0
  let num = x

  while (num > 0) {
    const remander = num % 10
    reversed = reversed * 10 + remander
    num = Math.floor(num / 10)
  }

  return x === reversed
};
