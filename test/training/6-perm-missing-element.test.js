const assert = require('assert')
const { solution, testData } = require('../../src/training/6-perm-missing-element')

describe('6. perm missing element', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
