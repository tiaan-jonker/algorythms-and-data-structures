// Inputs: int array nums1 with m representing num of elements in arr; int array nums2 with n representing num of elements in arr
// Output: Merge two arrs into single array that is in non-decreasing order (it should ascend)

function mergeSortedIntuitive(nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    nums1[i + m] = nums2[i]
  }

  return nums1.sort((a, b) => a - b)
}

function mergeSorted(nums1, m, nums2, n) {
  const nums1Length = nums1.length
  // count variable because num1 & nums2 not always same length
  // increment the idx starting at position zero
  let count = 0

  // start at position m in the loop because that from which nums should be replaced
  for (let i = m; i < nums1Length; i++) {
    nums1[m] = nums2[count]
    // alternative is: i + m in loop eliminating the need for count
    count++
  }

  // insertion sort 
  // start at idx 1 so that comparison can be made with prev num
  // (m + n) can be just nums1Length (but what if its zero?)
  for (let i = 1; i < (m + n); i++) {
    // start at index zero and compare backwards by decrementing 
    for (let j = i; j > 0; j--) {
      // check if curr num is less than previous number
      if (nums1[j] < nums[j - 1]) {
        // if that is the case then store curr number in temp variable
        const temp = nums1[j]
        // take previous number and insert in curr idx
        arr[j] = arr[j - 1]
        // take stored temp num and set it to the prev idx
        arr[j - 1] = temp 
      }
    }
  }

  return nums1 
}

// Solution works for normal input, but not for edge cases
// i.e. input of -> [2,0], 1, [1], 1 returns [2, 1] so not sorted  