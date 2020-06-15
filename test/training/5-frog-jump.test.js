const assert = require('assert')
const { solution, testData } = require('../../src/training/5-frog-jump')

describe('5. frog jump', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in.x, d.in.y, d.in.d), d.out)
    })
  })
})
