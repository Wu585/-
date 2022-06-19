const hannuota = (n, from, cache, to) => {
  if (n === 1) {
    return `${from}${to}\n`
  } else {
    return hannuota(n - 1, from, to, cache) + '\n' + `${from}${to}\n` + hannuota(n - 1, cache, from, to) + '\n'
  }
}

const h = hannuota(3,'A','B','C')
console.log(h)
