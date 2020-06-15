const assert = require('assert')
const { solution, testData } = require('../../src/training/9-frog-river-one')

describe('9. frog river one', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in.x, d.in.a), d.out)
    })
  })
})
