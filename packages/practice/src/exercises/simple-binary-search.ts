export const binarySearch = (sortedArray: number[], el: number) => {
  let mid
  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (el === sortedArray[mid]) {
      return mid
    }
    if (el < sortedArray[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}
