/**
 * 尾递归迭代优化
 */

const diedai = (n) => {
  const iterator = (i, n, result) => i === n ? result : iterator(i + 1, n, result * (i + 1))
  return iterator(1, n, 1)
}

const value = diedai(6)
console.log(value);

/**
 * 还可以这么写
 */
const diedai2 = (n, result) => n === 1 ? result : diedai2(n - 1, n * result)
const value2 = diedai2(6, 1)
console.log(value2)
