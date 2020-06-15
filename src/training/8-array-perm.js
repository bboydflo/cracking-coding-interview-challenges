/*
A non - empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

A[0] = 4
A[1] = 1
A[2] = 3
A[3] = 2
is a permutation, but array A such that:

A[0] = 4
A[1] = 1
A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

A[0] = 4
A[1] = 1
A[2] = 3
A[3] = 2

the function should return 1.

Given array A such that:

A[0] = 4
A[1] = 1
A[2] = 3

the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range[1 -> 100000];
each element of array A is an integer within the range[1 -> 1000000000].
*/

function arrDedupe(a) {
  let resp = Object.keys(a.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = curr
    }
    return acc
  }, {})).map(k => parseInt(k, 10))
  return resp
}

export function solution(a) {
  let sortedArr = a.sort()
  let dedupedSortedArr = arrDedupe(sortedArr)

  if (dedupedSortedArr.length !== a.length) {
    return 0
  }

  for(let i=0; i<dedupedSortedArr.length; i++) {
    if (dedupedSortedArr[i] !== i + 1) {
      return 0
    }
  }

  return 1
}

export const testData = [
  {
    in: [4, 3, 2, 1],
    out: 1
  }, {
    in: [4, 1, 3],
    out: 0
  }
]
