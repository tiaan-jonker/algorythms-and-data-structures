const { runningSum, runningSumAlt } = require('./index')

// Solution #1
test('runningSum function exists', () => {
  expect(typeof runningSum).toEqual('function')
})

test('runningSum returns correct running sum', () => {
  const arr = [1, 2, 3, 4]
  const output = [1, 3, 6, 10]
  expect(runningSum(arr)).toEqual(output)
})

test('runningSum returns correct running sum', () => {
  const arr = [1, 1, 1, 1, 1]
  const output = [1, 2, 3, 4, 5]
  expect(runningSum(arr)).toEqual(output)
})

test('runningSum returns correct running sum', () => {
  const arr = [3, 1, 2, 10, 1]
  const output = [3, 4, 6, 16, 17]
  expect(runningSum(arr)).toEqual(output)
})

// Solution #2
test('runningSumAlt function exists', () => {
  expect(typeof runningSumAlt).toEqual('function')
})

test('runningSumAlt returns correct running sum', () => {
  const arr = [1, 2, 3, 4]
  const output = [1, 3, 6, 10]
  expect(runningSumAlt(arr)).toEqual(output)
})

test('runningSumAlt returns correct running sum', () => {
  const arr = [1, 1, 1, 1, 1]
  const output = [1, 2, 3, 4, 5]
  expect(runningSumAlt(arr)).toEqual(output)
})

test('runningSumAlt returns correct running sum', () => {
  const arr = [3, 1, 2, 10, 1]
  const output = [3, 4, 6, 16, 17]
  expect(runningSumAlt(arr)).toEqual(output)
})
