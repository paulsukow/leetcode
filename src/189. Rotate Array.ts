/**
 Do not return anything, modify nums in-place instead.
 */
function rotate1(nums: number[], k: number): void {
  const netMoves = k % nums.length

  if (netMoves === 0) {
    return
  }

  const moved = nums.slice(nums.length - netMoves)
  nums.splice(nums.length - netMoves, netMoves)
  nums.splice(0, 0, ...moved)
};

function rotate(nums: number[], k: number): void {
  const netMoves = k % nums.length

  for (let i = 0; i < netMoves; i++) {
    const last = nums.pop()
    nums.unshift(last)
  }
};
