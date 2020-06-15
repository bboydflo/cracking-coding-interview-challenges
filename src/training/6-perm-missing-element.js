/*
An array A consisting of N different integers is given.The array contains integers
in the range[1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function: function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5

the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range[0 -> 100000];
the elements of A are all distinct;
each element of array A is an integer within the range[1 -> (N + 1)].
*/

export function solution(A) {
  let sortedArr = A.sort()
  let firstEl = sortedArr[0]
  for(let i=0; i<sortedArr.length; i++) {
    if (i+firstEl !== sortedArr[i]) {
      return (i+firstEl)
    }
  }

  // does not pass my own testData
  // https://julienrenaux.fr/2015/04/27/codility-efficient-algorithm-solutions-in-javascript/#permmissingelem
  // var length = A.length;
  // var sum = ((length + 1) / 2) * (length + 2);

  // var sumMinusMissing = 0;
  // for (var i = 0; i < length; i++) {
  //   sumMinusMissing += A[i];
  // }
  // return sum - sumMinusMissing;
}

export const testData = [
  {
    in: [2, 3, 1, 5],
    out: 4
  },
  {
    in: [1, 2, 3, 4, 5, 7],
    out: 6
  },
  {
    in: [2, 4, 5],
    out: 3
  }
]
