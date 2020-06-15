/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer(greater than 0)
that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range[1 -> 100000];
each element of array A is an integer within the range[−1000000 -> 1000000].
*/

function dedupeArray(a) {
  return Object.keys(a.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = curr
    }
    return acc
  }, {}))
}

export function solution(A) {
  if (A.length === 0) {
    return 1
  }
  if (A.length === 1) {
    if (A[0] <= 0) {
      return 1
    }
    return A[0] + 1
  }
  let sortedArr = A.slice(0).sort()
  if (sortedArr[0] < 0) {
    return 1
  }
  let dedupedSortedArr = dedupeArray(sortedArr).map(n => parseInt(n, 10))
  let firstEl = dedupedSortedArr[0]
  for(let i=0; i<dedupedSortedArr.length; i++) {
    if((i + firstEl) !== dedupedSortedArr[i]) {
      return i + firstEl
    }
  }
  return dedupedSortedArr[dedupedSortedArr.length - 1] + 1
}

export const testData = [
  {
    in: [1, 2, 3],
    out: 4
  },
  {
    in: [1, 3, 6, 4, 1, 2],
    out: 5
  },
  {
    in: [-1, -3],
    out: 1
  }
]
