/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let position = 0
  nums1.splice(m, n)

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i]

    while (nums1[position] < curr) {
      position++
    }

    nums1.splice(position, 0, curr)
  }
};
