import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import { ValidatorError } from '../../../main/shared/errors/validator-error'
import timezones from 'timezones-list'

export default class CustomerValidator {
	static async createValidation(
		req: Request, res: Response, next: NextFunction,
	): Promise<Response | void> {
		const schema = Joi.object({
			birthDate: Joi.date().less(new Date()),
			timeZone: Joi.string().required().valid(...timezones.map(tz => tz.tzCode)),
			customerId: Joi.string().required()
		})

		const result = schema.validate(req.body, { abortEarly: false })
		if (result.error) {
			throw new ValidatorError(result.error.details.map((d) => d.message))
		}
		return next()
	}

	static async updateValidation(
		req: Request, res: Response, next: NextFunction,
	): Promise<Response | void> {
		const schema = Joi.object({
			birthDate: Joi.date().less(new Date()).optional(),
			timeZone: Joi.string().optional().valid(...timezones.map(tz => tz.tzCode)),
		}).or('birthDate', 'timeZone')

		const result = schema.validate(req.body, { abortEarly: false })
		if (result.error) {
			throw new ValidatorError(result.error.details.map((d) => d.message))
		}
		return next()
	}

}
