// Inout: an int num
// Output: number of steps to reduce num to zero
// Constraints: if num is even, divide by 2, otherwise subtract 1

// Initial steps to 0
// While loop to run while num more than 0
// if num is even then divide it
// else minus one form the num
// increment the steps because one of the two operations would have ran

function numberOfSteps (num) {
  let steps = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
    
    steps++
  }
  return steps
}

/* 
Lessons learned: 
There is no mistakes nor failure, only what you can learn. So what did I learn? 
- the constraints in the Q is a guide to the answer
- using while loop immediately occurred to me
- no need to declare a second variable to 'hold' the input, only need to make the input equal to its new result when performing operation
*/