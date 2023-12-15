function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
    return -1
  }

  for (let i = 0; i < haystack.length; i++) {
    const subStr = haystack.substring(i, i + needle.length)
    if (subStr === needle) {
      return i
    }
  }


  return -1
};
