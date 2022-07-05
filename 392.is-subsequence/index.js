// Input: str called s, and string called t. 
// Output: return true if there is a subsequence i.e. ace is a subsequence of abcde


// Solution: tow pointers

function isSubsequence(s, t) {
  const leftBound = s.length
  const rightBound = t.length

  let left = 0
  let right = 0

  while (left < leftBound && right < rightBound) {
    if (s.charAt(left) === t.charAt(right)) {
      left++
    }

    right++
  }

  return left === leftBound
}
