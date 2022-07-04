// Input an array of nums
// Output is the running sum of nums i.e. the first num is just that, the last num is the sum of all prev nums and itself

// Solution 1
// Declare empty arr of result
// Set result first value equal to arrs first value
// Loop through arr (starting at idx 1)
//    At curr loop sum the curr num and prev running sum

// Runtime: O(n) 79ms - n is length of input arr. Using a single loop to iterate
// Space: O(1) 42.4MB

function runningSum(nums) {
  const n = nums.length

  let result = []

  result[0] = nums[0]

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + nums[i]
  }

  return result
}

// Solution #2
// No need for results array
// Perform the operations ont he input array instead

// Runtime: O(n) 88ms
// Space: O(1) 42.4MB

function runningSumAlt(nums) {
  const n = nums.length

  for (let i = 1; i < n; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
}

module.exports = { runningSum, runningSumAlt }
