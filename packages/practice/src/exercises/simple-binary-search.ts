export const binarySearch = (sortedArray: number[], el: number) => {
  let low = 0
  let high = sortedArray.length - 1
  let mid = Math.floor((low + high) / 2)

  while (low <= high) {
    if (el === sortedArray[mid]) {
      return el
    }
    if (el < sortedArray[mid]) {
      high = mid - 1
    }
    else (el > sortedArray[mid]) {
      low = mid + 1
    }
    
    // update mid
    mid = Math.floor((low + high) / 2)
  }
  return -1
}
