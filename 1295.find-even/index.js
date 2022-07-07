// Initiate count to zero
// Loop through array
// Concert curr num to string to access string method of .length
// if num string length is even
// iterate count

// Runtime: O(n) 78ms
// Space: 0(1) 44.3mb

function findNumbers(nums) {
  const n = nums.length

  let count = 0

  for (let i = 0; i < n; i++) {
    let currNumToString = nums[i].toString()
    if (currNumToString.length % 2 === 0) {
      count++
    }
  }

  return count
}