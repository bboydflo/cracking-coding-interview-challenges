const assert = require('assert')
const { solution, testData } = require('../../src/training/12-passing-cars')

describe('12. passing cars', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
