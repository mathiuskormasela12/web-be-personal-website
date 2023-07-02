// =========== Service
// import all packages
import { type Request } from 'express'

abstract class Service {
  private readonly body: Request['body']
  private readonly query: Request['query']
  private readonly params: Request['params']

  constructor (req: Request) {
    this.body = req.body
    this.query = req.query
    this.params = req.params
  }

  protected get getBody (): Request['body'] {
    return this.body
  }

  protected get getQuery (): Request['query'] {
    return this.query
  }

  protected get getParams (): Request['params'] {
    return this.params
  }
}

export default Service
