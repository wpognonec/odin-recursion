function fibs(n) {
  const arr = []
  while (n-- > 0) {
    if (arr.length === 0) arr.push(0)
    else if (arr.length === 1) arr.push(1)
    else arr.push(arr.at(-1) + arr.at(-2))
  }
  return arr
}

function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr.slice(0, n)
  } else {
    const x = arr.at(-1) + arr.at(-2)
    arr.push(x)
    return fibsRec(n, arr)
  }
}

console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(8))
console.log(fibsRec(0))
console.log(fibsRec(1))
console.log(fibsRec(8))
