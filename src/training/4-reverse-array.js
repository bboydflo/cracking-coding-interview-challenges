/*
Problem: Given array A consisting of N integers, return the reversed array.
Solution: We can iterate over the first half of the array and exchange the elements with
those in the second part of the array.
*/

// [1, 2, 3, 4, 5, 6]
// [6, 5, 4, 3, 2, 1]
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
export function solution(a) {
  let currEl = null
  for(let i=0; i<a.length/2; i++) {
    currEl = a[a.length - 1 - i]
    a[a.length - 1 - i] = a[i]
    a[i] = currEl
  }
  return a
}

export const testData = [
  {
    in: [1, 2, 3],
    out: [3, 2, 1]
  },
  {
    in: [2, 4, 6, 8, 10],
    out: [10, 8, 6, 4, 2]
  },
  {
    in: [2, 4, 6, 8],
    out: [8, 6, 4, 2]
  }
]
