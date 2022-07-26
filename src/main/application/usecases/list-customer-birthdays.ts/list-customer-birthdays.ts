import { inject, injectable } from 'tsyringe'
import { CustomerRepository } from '../../repositories/customer.repository'

@injectable()
export class ListCustomerBirthDays {
	private repository: CustomerRepository

	constructor(@inject('CustomerRepositoryImpl') repository: CustomerRepository) {
		this.repository = repository
	}

	async execute() {
		const data = await this.repository.find()

		return data
	}
}
