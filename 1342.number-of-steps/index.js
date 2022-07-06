// Inout: an int num
// Output: number of steps to reduce num to zero
// Constraints: if num is even, divide by 2, otherwise subtract 1

// Initial steps to 0
// While loop to run while num more than 0
// if num is even then divide it
// else minus one form the num
// increment the steps because one of the two operations would have ran

// Runtime: O(log n) 106ms
// Space: O(1) 41.6mb

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

// Alternative: counting bits
/*
Each num is represented in bits. Subtracting 1 from odd num changes the last bit from 1 to 0. Dividing by 2 removes the last bit from a num
To illustrate: 
Num   210       105       104       52        26        13        12        6         3         2         1         0
Bits  11010010  1101001   1101000   110100    11010     1101      1100      110       11        10        1         0
Note  Even      Odd       Even      Even      Even      Odd       Even      Even      Odd       Even      Odd       Done
Step  0         1         2         3         4         5         6         7         8         9         10        11
Note: removing 0's took one step to remove, 1's took two. 
*/

function numberOfStepsBits(num) {
  function bitConvert(int) {
    let num = int;
    let binary = (num % 2).toString()
    console.log(binary)
    for (; num > 1;) {
      num = parseInt(num / 2);
      binary = (num % 2) + (binary);
    }
    return binary
  }

  const bitNum = bitConvert(num)

  let steps = 0

  for (let charNum of bitNum) {
    if (charNum === '1') {
      steps = steps + 2
    } else {
      steps = steps + 1
    }
  }
  return steps - 1
}

// There is a third solution -> counting bits with bitwise (will be revisited)