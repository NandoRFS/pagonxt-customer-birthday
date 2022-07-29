import 'reflect-metadata'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterCustomerBirthDate } from '../../../main/application/usecases/register-customer-birth-date/register-customer-birth-date'
import { ListCustomerBirthDays } from '../../../main/application/usecases/list-customer-birthdays.ts/list-customer-birthdays'
import { UpdateCustomerBirthDate } from '../../../main/application/usecases/update-customer-birth-date/update-customer-birth-date'
import { DeleteCustomerBirthDate } from '../../../main/application/usecases/delete-customer-birth-date/delete-customer-birth-date'

export class CustomerController {

	async insert(req: Request, res: Response) {
		const data = req.body
		const registerCustomerBirthDate = container.resolve(RegisterCustomerBirthDate)
		const response = await registerCustomerBirthDate.execute(data)
		return res.status(201).json(response)
	}

	async find(_req: Request, res: Response) {
		const listCustomerBirthDays = container.resolve(ListCustomerBirthDays)
		const response = await listCustomerBirthDays.execute()
		return res.status(200).json(response)
	}

	async update(req: Request, res: Response) {
		const customerId = req.params.customerId
		const customerUpdate = req.body
		const updateCustomerBirthDate = container.resolve(UpdateCustomerBirthDate)
		const response = await updateCustomerBirthDate.execute(customerId, customerUpdate)
		return res.status(204).json(response)
	}

	async delete(req: Request, res: Response) {
		const customerId = req.params.customerId
		const deleteCustomerBirthDate = container.resolve(DeleteCustomerBirthDate)
		const response = await deleteCustomerBirthDate.execute(customerId)
		return res.status(200).json(response)
	}

}
