function greatesReplace(arr) {
  const n = arr.length

  let newArr = []

  for (let i = 0; i < n; i++) {
    let max = arr[i + 1]

    for (let j = i + 1; j < n; j++) {
      let value = arr[j + 1]

      max = value > max ? value : max
    }

    newArr.push(max)
  }

  newArr[arr.length - 1] = -1

  return newArr
}
