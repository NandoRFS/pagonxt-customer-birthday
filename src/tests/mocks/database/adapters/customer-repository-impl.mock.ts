import { Customer } from '../../../../main/domain/entities/customer/customer'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { listCustumerBirthdaysMock } from '../../application/usecases/list-customer-birthdays/list-customer-birthdays.mock'
import { registerCustomerBirthDate } from '../../../mocks/application/usecases/register-customer-birth-date/register-customer-birth-date.mock'

export class CustomerRepositoryImplMock implements CustomerRepository {

	async insert(customer: Customer): Promise<Customer> {
		registerCustomerBirthDate(customer)
		return customer
	}

	async find(): Promise<Customer[]> {
		return listCustumerBirthdaysMock
	}
}
