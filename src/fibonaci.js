/**
 * 最基础的方式
 * 缺点：计算次数太多
 */
const fibonaci = (n) => n === 0 ? 0 : n === 1 ? 1 : fibonaci(n - 1) + fibonaci(n - 2)

// const value = fibonaci(45)
// console.log(value)

/**
 * 优化：数组方式缓存值
 */
const fibonaciArray = (n) => {
  const array = [0, 1]
  for (let i = 2; i <= n; i++) {
    array[i] = array[i- 1] + array[i - 2]
  }
  return array[n]
}
const value2 = fibonaciArray(45)
console.log(value2)
