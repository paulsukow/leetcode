function intToRoman1(num: number): string {
  const valueMap = new Map()
  valueMap.set(1, 'I')
  valueMap.set(5, 'V')
  valueMap.set(10, 'X')
  valueMap.set(50, 'L')
  valueMap.set(100, 'C')
  valueMap.set(500, 'D')
  valueMap.set(1000, 'M')

  let romanNumberals = []
  let place = 1

  while (num > 0) {
    let digit = num % 10
    let numeral = ''

    if (digit === 9) {
      numeral = valueMap.get(place) + valueMap.get(10 * place)
    } else {
      if (digit >= 4) {
        numeral = valueMap.get(5 * place)
        digit -= 5
      }

      if (digit === -1) {
        numeral = valueMap.get(place) + numeral
      }

      for (let j = 0; j < digit; j++) {
        numeral = numeral + valueMap.get(place)
      }
    }

    romanNumberals.unshift(numeral)

    num = Math.floor(num / 10)
    place *= 10
  }

  return romanNumberals.join('')
};

function intToRoman(num: number): string {
  const ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
  const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
  const hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
  const thousands = ["","M","MM","MMM"]

  return thousands[Math.floor((num / 1000) % 10)] +  hundreds[Math.floor((num / 100) % 10)] + tens[Math.floor((num / 10) % 10)] + ones[num % 10]
};
