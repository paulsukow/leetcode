// O(n^2)
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i]

//         for (let j = i + 1; j < nums.length; j++) {
//             const sum = nums[i] + nums[j]
//             if (sum === target ) {
//                 return [i, j]
//             }
//         }
//     }
// };

// O(2n) which simplifies to O(n)
// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map()
//     nums.forEach((num, i) => map.set(num, i))

//     for (let i = 0; i < nums.length; i++) {
//         const compliment = target - nums[i]
//         const existsInMap = map.has(compliment)
//         const notSelf = map.get(compliment) !== i

//         if (existsInMap && notSelf) {
//             return [i, map.get(compliment)]
//         }
//     }

//     return []
// };

// O(n) single loop
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if (map.has(compliment)) {
      return [i, map.get(compliment)]
    }

    map.set(nums[i], i)
  }

  return []
};

