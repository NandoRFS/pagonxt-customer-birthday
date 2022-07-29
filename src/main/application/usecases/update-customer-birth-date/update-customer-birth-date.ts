import { CustomerRepository } from '../../repositories/customer.repository'
import { inject, injectable } from 'tsyringe'
import { CustomerUpdate } from '../../../domain/entities/customer/custumer-update'

@injectable()
export class UpdateCustomerBirthDate {
	private repository: CustomerRepository

	constructor(@inject('CustomerRepositoryImpl') repository: CustomerRepository) {
		this.repository = repository
	}

	async execute(customer: string, customerUpdate: CustomerUpdate) {
		const data = await this.repository.findOneAndUpdate(customer, customerUpdate)

		return data
	}

}