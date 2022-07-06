// Runtime: O(n) 102ms 
// Space: O(1) 44.7MB

function fizzBuzz (n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    let output = ''

    if (i % 3 === 0) {
      output += 'Fizz'
    }

    if (i % 5 === 0) {
      output += 'Buzz'
    }

    result.push(output || i.toString())
  }

  return result
}

/* 
Lessons learned: 
There is no mistakes nor failure, only what you can learn. So what did I learn? 
- read the question carefully and understand what kind of output is desired.
    - Just went ahead and console.logged the output not seeing that an array of strings is what the output should be
- I know a loop was required to perform n operations, but should have initialised it to 1 from the start (thats the first output)
- In the if statements I put n instead of i. N is just a static input number, i is the curr iteration. 
- Checking if i is divisible by 3 and 5 not required if its being added to an output and pushed to empty array
- I recalled that '' is a falsy value so if output is empty the other side of || will be pushed
- Again looking at output the num i was pushed which should have been a string
*/