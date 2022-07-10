// Input: arr of ints
// Output: boolean; if n exists and its double exists too

// Start loop
// Start second loop
// Check that i and j are not the same
// if curr idx of gist loop is double of curr idx of second loop return true

function checkIfExists(arr) {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (arr[i] === arr[j] * 2) {
          return true
        }
      }
    }
  }

  return false
}