// =========== Router
// import all packages
import { Router as ExpressRouter } from 'express'
import expressFileUpload from 'express-fileupload'

abstract class Router {
  protected readonly router: ExpressRouter

  constructor () {
    this.router = ExpressRouter()
  }

  protected setupUploadFile (): void {
    this.router.use(expressFileUpload({
      createParentPath: true
    }))
  }

  public abstract routes (): void

  public get getRouter (): ExpressRouter {
    return this.router
  }
}

export default Router
