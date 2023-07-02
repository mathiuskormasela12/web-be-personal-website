// ========== App
// import all packages
import express, { type Application } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import Config from '../config'
import { AuthRouter } from '../routers'

class App {
  private readonly app: Application

  constructor () {
    this.app = express()

    this.setup()
  }

  private setup (): void {
    // Setup url encoded & json
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())

    // Setup helmet & compression
    this.app.use(compression())
    this.app.use(helmet())

    // Setup morgan
    if (Config.NODE_ENV === 'development') this.app.use(require('morgan')('dev'))

    // Define routes
    this.app.use('/api', new AuthRouter().getRouter)
  }

  public listen (): void {
    this.app.listen(Config.PORT, () => {
      console.log(`The Personal Website Backend is being run at ${Config.APP_URL}`)
    })
  }
}

export default App
