import { binarySearch } from '../src/exercises/simple-binary-search'

describe('simple binary search', () => {

  it('can find an element using binary search', () => {

    // arrange
    const sortedArray = [1, 2, 3, 4, 5, 6, 7]
    const elementToSearch = 3

    // act
    const result = binarySearch(sortedArray, elementToSearch)

    // assert
    expect(result).toEqual(elementToSearch)
  })

  it('if element is not in the sorted array expect -1', () => {

    // arrange
    const sortedArray = [1, 2, 3, 4, 5, 6, 7]
    const elementToSearch = 12

    // act
    const result = binarySearch(sortedArray, elementToSearch)

    // assert
    expect(result).toEqual(-1)
  })

  it('if array is empty expect -1', () => {

    // arrange
    const emptyArray: number[] = []
    const elementToSearch = 12

    // act
    const result = binarySearch(emptyArray, elementToSearch)

    // assert
    expect(result).toEqual(-1)
  })

  it('if array has only one element and it is the element searched for', () => {

    // arrange
    const singleElementArray = [6]
    const elementToSearch = 6

    // act
    const result = binarySearch(singleElementArray, elementToSearch)

    // assert
    expect(result).toEqual(elementToSearch)
  })

  it('if array has only one element and it doesn\'t contain the element we\'re searching for expect -1', () => {

    // arrange
    const singleElementArray = [6]
    const elementToSearch = 12

    // act
    const result = binarySearch(singleElementArray, elementToSearch)

    // assert
    expect(result).toEqual(-1)
  })

  it('if array has 2 elements and we\'re searching for one of them, return that element', () => {

    // arrange
    const sortedArray = [6, 14]
    const elementToSearch = 14

    // act
    const result = binarySearch(sortedArray, elementToSearch)

    // assert
    expect(result).toEqual(elementToSearch)
  })

  it('it can find a negative element in an array which includes negative numbers', () => {

    // arrange
    const sortedArray = [-10, -4, 2, 6, 14]
    const elementToSearch = -4

    // act
    const result = binarySearch(sortedArray, elementToSearch)

    // assert
    expect(result).toEqual(elementToSearch)
  })

  it('it can find a positive element in an array which includes negative numbers', () => {

    // arrange
    const sortedArray = [-10, -4, 2, 6, 14]
    const elementToSearch = 6

    // act
    const result = binarySearch(sortedArray, elementToSearch)

    // assert
    expect(result).toEqual(elementToSearch)
  })
})
