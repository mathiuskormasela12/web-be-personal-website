// ========== Main Test
// import all packages
import { main } from '../src/main'

describe('Main', () => {
  it('should be return "Hello World" string', () => {
    expect(main()).toBe('Hello World')
  })
})
