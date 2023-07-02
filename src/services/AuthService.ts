// =========== Auth Service
// import all packages
import Service from '../core/Service'
import { type IResponse } from '../types'

export class AuthService extends Service {
  public register (): IResponse<{ username: string, password: string }> {
    console.log(this.getBody)
    return {
      statusCode: 200,
      message: 'Register',
      data: {
        username: 'jhondoe',
        password: 'jhobndoe'
      }
    }
  }
}
