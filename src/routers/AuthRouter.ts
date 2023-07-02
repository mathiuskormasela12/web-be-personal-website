// =========== Auth Router
// import all packages
import Router from '../core/Router'
import { AuthController } from '../controllers'

export class AuthRouter extends Router {
  constructor () {
    super()
    this.routes()
  }

  public routes (): void {
    this.router.post('/v1/auth/register', AuthController.register)
  }
}
