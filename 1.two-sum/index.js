// Input arr of numbers & target number
// Output indices of two numbers that add up to target

// Brute force
// two pointer solution
// with two loops:
// initiate i at index 0
// initiate j at index i + 1
// find other num where the target - currNum
// if found return the current loop position

function twoSum(nums, target) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j]
      }
    }
  }
  return null
}

// Runtime: O(n^2) 119ms
// Space: 42.5MB

// Hashmap
// Create hashmap
// First loop 
//    populate hashmap with arr key value pairs
// Second loop
//    get the other matching num that adds to target
//    check if hashmap contains that num && its not the currently iterated num
//    if it is return the indexes

function twoSumAlt(nums, target) {
  const n = nums.length
  let hashmap = {}

  for (let i = 0; i < n; i++) {
    hashmap[nums[i]] = i
  }

  for (let j = 0; j < n; j++) {
    let compliment = target - nums[j]

    if (hashmap.hasOwnProperty(compliment) && hashmap[compliment] !== j) {
      return [j, hashmap[compliment]]
    }
  }

  return null
}

// Runtime: O(n) 124ms
// Space: 44.6MB

module.exports = { twoSum, twoSumAlt }
