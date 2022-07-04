const { pivotIndex, pivotIndexAlt } = require('./index')

// Solution #1
test('pivotIndex function exists', () => {
  expect(typeof pivotIndex).toEqual('function')
})

test('pivotIndex returns correct pivot index', () => {
  const arr = [1, 7, 3, 6, 5, 6]
  const output = 3
  expect(pivotIndex(arr)).toEqual(output)
})

test('pivotIndex returns -1, no index that satisfies requirements', () => {
  const arr = [1, 2, 3]
  const output = -1
  expect(pivotIndex(arr)).toEqual(output)
})

test('pivotIndex returns 0, no elements to left of index 0', () => {
  const arr = [2, 1 - 1]
  const output = 0
  expect(pivotIndex(arr)).toEqual(output)
})

