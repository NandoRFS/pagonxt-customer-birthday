import { Customer } from '../../domain/entities/customer/customer'
import { CustomerRepository } from '../../application/repositories/customer.repository'
import CustomerModel from '../models/customer.model'
import { CustomerUpdate } from '../../../main/domain/entities/customer/custumer-update'
import { NotFoundError } from '../../../main/shared/errors/not-found-error'

export class CustomerRepositoryImpl implements CustomerRepository {

	async insert(customer: Customer): Promise<Customer> {
		await CustomerModel.create(customer)
		return customer
	}

	async find(): Promise<Customer[]> {
		const data = await CustomerModel.aggregate([
			{
				$match: {
					$expr: {
						$and: [
							{
								$eq: [{ $dayOfMonth: '$birthDate' }, {
									$dayOfMonth: {
										date: new Date(),
										timezone: '$timeZone'
									}
								}]
							},
							{
								$eq: [{ $month: '$birthDate' }, {
									$month: {
										date: new Date(),
										timezone: '$timeZone'
									}
								}]
							},
						],
					},
				}
			},
			{
				$unset: ['__v', '_id']
			}
		])

		return data
	}

	async delete(customerId: string): Promise<string> {
		const data = await CustomerModel.findOneAndDelete({ customerId })
		if (data === null) {
			throw new NotFoundError(`customerId ${customerId} not found`)
		}
		return 'deleted'
	}

	async findOneAndUpdate(customerId: string, customerUpdate: CustomerUpdate): Promise<CustomerUpdate> {
		const data = await CustomerModel.findOneAndUpdate({ customerId }, customerUpdate, { rawResult: true })
		if (data.value === null) {
			throw new NotFoundError(`customerId ${customerId} not found`)
		}
		return customerUpdate
	}
}
