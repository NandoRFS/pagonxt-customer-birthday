import { CustomerRepository } from '../../repositories/customer.repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteCustomerBirthDate {
	private repository: CustomerRepository

	constructor(@inject('CustomerRepositoryImpl') repository: CustomerRepository) {
		this.repository = repository
	}

	async execute(customer: string) {
		const data = await this.repository.delete(customer)

		return data
	}

}