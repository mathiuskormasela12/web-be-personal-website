// =========== Response Types
// import all packages

export type Error = Record<string, string[]>

export interface IResponse<T> {
  statusCode: number
  message: string
  data?: T | T[]
  errors?: Error
}
