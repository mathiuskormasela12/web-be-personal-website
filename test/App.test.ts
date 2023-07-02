// ========== App Test
// import all packages
import App from '../src/core/App'

describe('App', () => {
  let app: App

  beforeEach(() => {
    app = new App()
  })

  it('should be defined and instantiate', () => {
    expect(app).toBeDefined()
    expect(app).toBeInstanceOf(App)
  })
})
