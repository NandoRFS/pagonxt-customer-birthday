/* eslint-disable indent */
import { NextFunction, Request, Response } from 'express'
import { ValidatorError } from '../../shared/errors/validator-error'
import { MongoServerError } from 'mongodb'
import ReturnError from '../entities/return-error.interface'

export default function errorHandler(error: Error, req: Request, res: Response, _next: NextFunction) {
	const returnError: ReturnError = {
		statusCode: 500,
		message: error.message
	}
	switch (true) {
		case error instanceof ValidatorError:
			returnError.statusCode = 400
			returnError.message = 'validation error'
			returnError.errors = (error as ValidatorError).errors
			return res.status(400).json(returnError)
		case error instanceof MongoServerError:
			returnError.statusCode = 400
			returnError.message = `duplicated value: ${JSON.stringify((error as MongoServerError).keyValue)}`
			return res.status(400).json(returnError)
		default:
			return res.status(500).json(returnError)
	}

}
