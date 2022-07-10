// Input: str called s, and string called t.
// Output: return true if there is a subsequence i.e. ace is a subsequence of abcde

// Runtime: 78ms O(|T|), T is the length of target string
// Space: 41.5mb O(1)

// Solution: two pointers

function isSubsequence(s, t) {
  // set the bounds for absolute upper limit
  let sBound = s.length
  let tBound = t.length

  // set two points starting at idx zero for each input string
  let sIdx = 0
  let tIdx = 0

  // check the idx for both strings against their respective bounds
  while (sIdx < sBound && tIdx < tBound) {
    // if the curr s is equal to curr t
    if (s[sIdx] === t[tIdx]) {
      // increment s idx
      sIdx++
    }
    // if not the same then increment t idx
    tIdx++
  }

  // if t contains all of s then s idx should 'hit' its upper bound
  return sBound === sIdx
}
