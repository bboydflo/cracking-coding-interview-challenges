const assert = require('assert')
const { solution, testData } = require('../../src/training/3-cyclic-rotation')

describe('3. cyclic rotation', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: [${d.out}]`, () => {
      assert.deepEqual(solution(d.in.a, d.in.k), d.out)
    })
  })
})
