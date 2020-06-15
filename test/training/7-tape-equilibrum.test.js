const assert = require('assert')
const { solution, testData } = require('../../src/training/7-tape-equilibrum')

describe('7. tape equilibrum', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
