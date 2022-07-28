import 'reflect-metadata'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterCustomerBirthDate } from '../../../main/application/usecases/register-customer-birth-date/register-customer-birth-date'
import { ListCustomerBirthDays } from '../../../main/application/usecases/list-customer-birthdays.ts/list-customer-birthdays'

export class CustomerController {

	async insert(req: Request, res: Response) {
		const data = req.body

		const registerCustomerBirthDate = container.resolve(RegisterCustomerBirthDate)

		const response = await registerCustomerBirthDate.execute(data)
		return res.status(201).json(response)

	}

	async find(req: Request, res: Response) {
		const listCustomerBirthDays = container.resolve(ListCustomerBirthDays)
		const response = await listCustomerBirthDays.execute()
		return res.status(200).json(response)

	}

}
