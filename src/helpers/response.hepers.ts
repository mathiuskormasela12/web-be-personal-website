// ============ Response Helpers
// import all packages
import { type Response } from 'express'
import { type IResponse } from '../types'

export const sendResponse = <T>(res: Response, body: IResponse<T>): Response => {
  return res.status(body.statusCode).json(body)
}
