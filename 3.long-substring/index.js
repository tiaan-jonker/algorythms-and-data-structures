// Input: str of length n
// Output: the length of longest substring without repeating chars

// Runtime: O(n^2) 383ms
// Space: ?? 48.7mb

function longestSubstring (s) {
  const n = s.length

  // result that will be returned 
  let longestStrLength = 0

  // first loop through string
  for (let i = 0; i < n; i++) {
    // create new set created from current point
    let currStrSet = new Set()

    // initiate second loop that starts at position i 
    for (let j = i; j < n; j++) {
      // check if curr item is in set
      if (currStrSet.has(s[j])) {
        // move on if that is the case
        break
      } else {
        // otherwise add it to the set
        currStrSet.add(s[j])
      }
    }
    // set longest to max of current set or existing longest value
    longestStrLength = Math.max(longestStrLength, currStrSet.size)
    // set is emptied 
  }

  return longestStrLength
}