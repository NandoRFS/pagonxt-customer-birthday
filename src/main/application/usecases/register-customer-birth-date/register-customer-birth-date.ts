import { Customer } from '../../../domain/entities/customer/customer'
import { CustomerRepository } from '../../repositories/customer.repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterCustomerBirthDate {
	private repository: CustomerRepository

	constructor(@inject('CustomerRepositoryImpl') repository: CustomerRepository) {
		this.repository = repository
	}

	async execute(customer: Customer) {
		const data = await this.repository.insert(customer)

		return data
	}

}