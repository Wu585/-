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
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}
const value2 = fibonaciArray(2)
console.log(value2)

/**
 * 优化：记忆化函数缓存值，减少计算次数过多的问题
 */
const memorize = (fn) => {
  const cache = {}
  return (first, ...args) => {
    if (!(first in cache)) {
      cache[first] = fn(first, ...args)
    }
    return cache[first]
  }
}
const mfFibonaci = (n) => n === 0 ? 0 : n === 1 ? 1 : mf(n - 1) + mf(n - 2)
const mf = memorize(mfFibonaci)
const value3 = mfFibonaci(50)
console.log(value3);

/**
 * 上述代码优化
 */
const f = memorize(n => n === 0 ? 0 : n === 1 ? 1 : f(n - 1) + f(n - 2))
const value4 = mfFibonaci(50)
console.log(value4);
