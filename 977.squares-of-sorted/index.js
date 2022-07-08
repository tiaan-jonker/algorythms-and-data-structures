// Input: arr of ints which can be +ve, -ve and zero
// Output: each number squared and sorted in ascending order

// Initiate left (starting at zero) and right (starting at end of arr)
// Loop starting at end
// (idea is to fill in the results array form back)
// If abs right more than abs left then sqaure the num, decrement right
// else square left and decrement left

// Runtime: O(n) 114ms
// Space: O(n) 48.7mb

function sortedSquares(nums) {
  const n = nums.length
  let result = []
  let left = 0
  let right = n

  for (let i = n; i >= 0; i--) {
    let squared = 0
    if (Math.abs(nums[right]) > Math.abs(nums[left])) {
      // result[i] = nums[right]
      // remember to square nums first
      squared = nums[right]
      right--
    } else {
      squared = nums[left]
      // left--
      left++
    }
    result[i] = squared * squared
  }

  return result
}
