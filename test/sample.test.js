import Sample from '../src/sample'
import GetSampleES5 from '../src/sample.es5.style'

// ES6 example of a simple test on a module
describe('Sample Library', () => {
  it('returns hello there', () => {
    const sample = new Sample()
    expect(sample.getMesssage()).toBe('hello there')
  })
})

// ES5 example uses a simple function export
// Recommend not trying ES5 module patterns if in a rush
describe('Sample ES5 function', () => {
  it('returns hi there', () => {
    expect(GetSampleES5()).toBe('hi there')
  })
})
