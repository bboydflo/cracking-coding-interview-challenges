const assert = require('assert')
const { solution, testData } = require('../../src/training/10-missing-integer')

describe('10. missing integer', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
