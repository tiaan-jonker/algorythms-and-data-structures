function inPlaceSquare(arr) {
  let n = arr.length

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr[i] *= arr[i]
    } 
  }

  return arr
}