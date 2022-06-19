const max1 = (array) => {
  if (array.length === 1) {
    return array[0]
  }
  const otherMax = max1(array.slice(1))
  return array[0] > otherMax ? array[0] : otherMax
}

const maxValue1 = max1([1, 3, 2, 10, 90, 78])

console.log(maxValue1)

console.log('-----------------------------------')

const maxOfTwo = (a, b) => a > b ? a : b

const max2 = ([first, ...others]) => others.length < 1 ? first : maxOfTwo(first, max2(others))

const maxValue2 = max1([1, 3, 2, 10, 90, 78])

console.log(maxValue2)
