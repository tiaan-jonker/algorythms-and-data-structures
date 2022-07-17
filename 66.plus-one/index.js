// Input: arr of ints
// Output: increment the largest int (but not the largest int form arr, rather the total number represented)

function plusOne(digits) {
  const n = digits.length - 1

  // Start loop from end of arr
  for (let i = n; i >= 0; i--) {
    // if the curr digit is 9 set it to 0
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      // else if curr digits is something else increment and immediately return arr
      digits[i]++
      return digits
    }
  } 

  // if all digits are 9 then they will all be set to 0. Return those digits with 1 add to front
  return [1, ...digits]
}