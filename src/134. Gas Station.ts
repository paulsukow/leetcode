// todo need to practice
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length
  let tank = 0
  let start = 0
  let expense = 0

  for (let i = 0; i < n; i++) {
    const costToMoveToNextStation = gas[i] - cost[i]
    tank += costToMoveToNextStation
    if (tank < 0) {
      start = i + 1
      expense += tank
      tank = 0
    }
  }

  return tank + expense >= 0  ? start : -1
};
