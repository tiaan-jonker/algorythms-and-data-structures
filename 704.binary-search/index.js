// Input: arr of ints and a target number
// Output: if the target num is arr of ints then return that index, if not then return -1

// Runtime: O(logN) 70ms
// Space: O(1) 45.3Mb

function binarySearch(nums, target) {
  // set lower and upper bounds
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    // find the middle index
    // on next iterations the middle will change depending on 
    // lower and upper bound changes (if target is more or less than middle)
    const middle = Math.floor(left + (right - left) / 2)

    // if the curr middle num is equal to target return
    if (nums[middle] === target) return middle

    // if middle less than target
    if (nums[middle] < target) {
      // push lower bound up to curr middle and add one 
      // to ensure current middle index is not included 
      left = middle + 1
    } else {
      // opposite if less
      right = middle - 1
    }
  }

  return -1
}