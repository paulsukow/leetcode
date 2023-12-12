function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false
  }

  const magazineLetters = new Map()
  magazine.split('').forEach((letter) => {
    const count = magazineLetters.get(letter) ?? 0
    magazineLetters.set(letter, count + 1)
  })


  for (let letter of ransomNote.split('')) {
    const count = magazineLetters.get(letter)
    if (!count) {
      return false
    }
    magazineLetters.set(letter, count - 1)
  }

  return true
}
