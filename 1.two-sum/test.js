const { twoSum, twoSumAlt } = require('./index')

// Brute force
test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function')
})

test('twoSum returns correct indexes', () => {
  const arr = [2, 7, 11, 15]
  const target = 9
  const output = [0, 1]
  expect(twoSum(arr, target)).toEqual(output)
})

test('twoSum returns correct indexes', () => {
  const arr = [2, 7, 11, 15]
  const target = 100
  const output = null
  expect(twoSum(arr, target)).toEqual(output)
})

// Hashmap
test('twoSumAlt function exists', () => {
  expect(typeof twoSumAlt).toEqual('function')
})

test('twoSumAlt returns correct indexes', () => {
  const arr = [2, 7, 11, 15]
  const target = 9
  const output = [0, 1]
  expect(twoSumAlt(arr, target)).toEqual(output)
})

test('twoSumAlt returns correct indexes', () => {
  const arr = [2, 7, 11, 15]
  const target = 100
  const output = null
  expect(twoSumAlt(arr, target)).toEqual(output)
})
