const assert = require('assert')
const { solution, testData } = require('../../src/training/4-reverse-array')

describe('4. reverse array', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${JSON.stringify(d.out)}`, () => {
      assert.deepEqual(solution(d.in), d.out)
    })
  })
})
