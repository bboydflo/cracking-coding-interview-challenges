const assert = require('assert')
const { solution, testData } = require('../../src/training/1-binary-gap')

describe('1. binary gap', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${d.in} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
