import { Customer } from '../../../../main/domain/entities/customer/customer'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { listCustomerBirthdaysMock } from '../../application/usecases/list-customer-birthdays/list-customer-birthdays.mock'
import { registerCustomerBirthDate } from '../../../mocks/application/usecases/register-customer-birth-date/register-customer-birth-date.mock'
import { CustomerUpdate } from '../../../../main/domain/entities/customer/custumer-update'
import { NotFoundError } from '../../../../main/shared/errors/not-found-error'

export class CustomerRepositoryImplMock implements CustomerRepository {

	async insert(customer: Customer): Promise<Customer> {
		registerCustomerBirthDate(customer)
		return customer
	}

	async find(): Promise<Customer[]> {
		return listCustomerBirthdaysMock
	}

	async findOneAndUpdate(customerId: string, customerUpdate: CustomerUpdate): Promise<CustomerUpdate> {
		const data = listCustomerBirthdaysMock.find(customer => customer.customerId === customerId)

		if (data === null) {
			throw new NotFoundError(`customerId ${customerId} not found`)
		}
		return customerUpdate
	}


	async delete(customerId: string): Promise<string> {
		return 'deleted'
	}
}
