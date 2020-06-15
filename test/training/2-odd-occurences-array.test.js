const assert = require('assert')
const { solution, testData } = require('../../src/training/2-odd-occurences-array')

describe('2. odd occurences array', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${d.in} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
