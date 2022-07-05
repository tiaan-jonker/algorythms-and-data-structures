// set a max variable
// 1st loop through each account
// set curr account sum to zero
// 2nd loop to loop through the nums in that acc
// add the current accounts num to currAcc variable
// check if the currAcc > max, if so then set max to currAcc



function maxWealth (acc) {
  const n = acc.length

  let max = 0

  for (let i = 0; i < n; i++) {
    let currAcc = 0
    for (let j = 0; j < acc[i].length; j++) {
      currAcc += acc[i][j]
    }

    if (currAcc > max) {
      max = currAcc
    }
  }

  return max
}