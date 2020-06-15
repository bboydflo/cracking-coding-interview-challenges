const assert = require('assert')
const { solution, testData } = require('../../src/training/8-array-perm')

describe('8. array perm', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
