function destCity(paths: string[][]): string {
  const flightMap = new Map()
  paths.forEach(it => flightMap.set(it[0], it[1]))

  let location = paths[0][0]
  while (flightMap.has(location)) {
    location = flightMap.get(location)

  }

  return location
};
