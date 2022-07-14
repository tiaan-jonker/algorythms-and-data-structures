// Input: arr of ints, largest is unique
// Output: index of num where its at least twice as every other element in array 

// Runtime: O(n)
// Space: O(1)

function dominantIndex(nums) {
  const n = nums.length

  let max = 0
  let secondMax = 0
  let result = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
      result = i
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }

  return max >= 2 * secondMax ? result : - 1
}
