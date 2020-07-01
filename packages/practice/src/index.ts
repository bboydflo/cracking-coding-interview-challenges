import { binarySearch } from './exercises/simple-binary-search'

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};


console.log(binarySearch([6, 14], 14))
