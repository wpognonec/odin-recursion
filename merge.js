function mergeSort(arr) {
  let l = arr.length
  let m = Math.floor(l / 2)

  if (arr.length === 1) {
    return arr
  }

  let a1 = arr.slice(0, m)
  let a2 = arr.slice(m)

  return merge(mergeSort(a1), mergeSort(a2))
}

function merge(a1, a2) {
  let sorted = []

  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] < a2[0]) {
      sorted.push(a1.shift())
    } else {
      sorted.push(a2.shift())
    }
  }

  return sorted.concat(a1.slice(0)).concat(a2.slice(0))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
