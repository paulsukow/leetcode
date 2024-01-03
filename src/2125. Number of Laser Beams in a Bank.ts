//  O(n)
function numberOfBeams(bank: string[]): number {
  let lastRowDevices = 0
  let beams = 0

  for (let i = 0; i < bank.length; i++) {
    const currentRowDevices = (bank[i].match(/(1)/g) || []).length

    if (currentRowDevices > 0) {
      beams += lastRowDevices * currentRowDevices
      lastRowDevices = currentRowDevices
    }
  }

  return beams
};
