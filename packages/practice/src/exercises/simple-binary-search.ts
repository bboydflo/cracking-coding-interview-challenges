export const binarySearch = (sortedArray: number[], element: number) => {
  let min = 0;
  let max = sortedArray.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)

    if (element === sortedArray[middle]) {
      return element
    }
    if (element < sortedArray[middle]) {
      max = middle - 1
    }
    if (element > sortedArray[middle]) {
      min = middle + 1
    }
  }

  return -1
}
