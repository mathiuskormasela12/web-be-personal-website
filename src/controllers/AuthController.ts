// =========== Auth Controller
// import all packages
import { type Request, type Response } from 'express'
import { AuthService } from '../services/AuthService'
import { sendResponse } from '../helpers'

export class AuthController {
  public static register (req: Request, res: Response): Response {
    const authService = new AuthService(req)
    return sendResponse(res, authService.register())
  }
}
