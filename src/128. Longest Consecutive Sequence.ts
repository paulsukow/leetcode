// todo should practice this
// sort is O(nlog(n))
// So big O here is O(nlog(n)) + n, which simpifies to O(nlog(n))
// function longestConsecutive(nums: number[]): number {
//     nums.sort((a, b) => a > b ? 1 : -1 )

//     if (nums.length === 0) {
//         return 0
//     }

//     let largestSeq = 1
//     let currentSeq = 1

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1] + 1) {
//             currentSeq++

//             if (currentSeq > largestSeq) {
//                 largestSeq = currentSeq
//             }
//         } else if (nums[i] !== nums[i - 1]) {
//             currentSeq = 1
//         }
//     }

//     return largestSeq
// };

// O(n + n) simpified to O(n)
// function longestConsecutive(nums: number[]): number {
//     const numsSet = new Set(nums)
//     let largestSeq = 0
//     let currentSeq = 0
//     let startValues = []

//     for (let num of numsSet.values()) {
//         const isStartOfSq = !numsSet.has(num - 1)
//         if (isStartOfSq) {
//             startValues.push(num)
//         }
//     }

//     for (let val of startValues) {
//         let num = val
//         currentSeq = 1
//         while (numsSet.has(num + 1)) {
//             num++
//             currentSeq++
//         }

//         if (currentSeq > largestSeq) {
//             largestSeq = currentSeq
//         }
//     }

//     return largestSeq
// };


// O(n + n) simpified to O(n) cleaned up
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums)
  let largestSeq = 0
  let currentSeq = 0

  for (let num of numsSet.values()) {
    const isStartOfSeq = !numsSet.has(num - 1)

    if (isStartOfSeq) {
      currentSeq = 1
      let val = num

      while (numsSet.has(val + 1)) {
        val++
        currentSeq++
      }

      if (currentSeq > largestSeq) {
        largestSeq = currentSeq
      }
    }
  }

  return largestSeq
};
