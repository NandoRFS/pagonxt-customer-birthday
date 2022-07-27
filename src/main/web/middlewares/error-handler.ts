import { NextFunction, Request, Response } from "express"
import { NotFoundError } from "../../shared/errors/not-found-error"
import { InvalidArgumentError } from "../../shared/errors/invalid-arguments-error"

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof InvalidArgumentError) {
    return res.status(400).json(error.message)
  } else if (error instanceof NotFoundError) {
    return res.status(404).json(error.message)
  } else {
    return res.status(500).json(error.message)
  }

}
