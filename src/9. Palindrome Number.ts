function isPalindrome(x: number): boolean {
  const a = `${x}`
  const b = a.split('').reverse().join('')

  return a === b
};
