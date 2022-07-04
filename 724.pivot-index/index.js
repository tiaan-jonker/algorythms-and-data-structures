// Calculate the total sum
// Keep a running sum of nums as leftSum
// if the sum minus leftsum minus currNum equal to leftSum, return the index
// minus the currNum because that will be the pivot index point

function pivotIndex(nums) {
  const n = nums.length
  let sum = 0
  let leftSum = 0

  for (let num of nums) {
    sum += num
  }

  for (let i = 0; i < n; i++) {
    if (sum - leftSum - nums[i] === leftSum) {
      return i
    }
    leftSum += nums[i]
  }

  return -1
}

module.exports = { pivotIndex }
