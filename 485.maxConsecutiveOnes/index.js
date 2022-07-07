// Input: arr of ints
// Output: a number representing the max consecutive ones

// Initial max to zero
// Loop through arr
// Set a current max
// If curr num is 1 then increment currMax
// else make max equal to currMax and set currMax to zero

function findMaxConsecutiveOnes(nums) {
  const n = nums.length

  let max = 0

  for (let i = 0; i < n; i++) {
    let currMax = 0
    if (nums[i] === 1) {
      currMax++
    } else {
      max = currMax
      currMax = 0
    }
  }

  return max
}

// Did not produce anything

// Take #2

// Runtime: O(n) 120ms
// Space: O(1) 42.5MB

function findMaxConsecutiveOnesCorrect(nums) {
  const n = nums.length

  // Set alternative count outside loop
  let count = 0
  let max = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count += 1
    } else {
      // if num != 1 check max between curr count and max
      // reset count to zero
      max = Math.max(count, max)
      count = 0
    }
  }

  return Math.max(count, max)
}

// Lessons:
// 1. Set the count and max count outside of loop
// 2. Check for the max between the current count and last max num
