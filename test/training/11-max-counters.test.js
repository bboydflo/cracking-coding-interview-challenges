const assert = require('assert')
const { solution, testData } = require('../../src/training/11-max-counters')

describe('11. max counters', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.deepEqual(solution(d.in.n, d.in.a), d.out)
    })
  })
})
