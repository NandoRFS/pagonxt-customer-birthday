import 'reflect-metadata'
import { RegisterCustomerBirthDate } from '../../../../main/application/usecases/register-customer-birth-date/register-customer-birth-date'
import { container } from 'tsyringe'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { CustomerRepositoryImplMock } from '../../../mocks/database/adapters/customer-repository-impl.mock'
import { Customer } from '../../../../main/domain/entities/customer/customer'

describe('Register custumer birth date use case', () => {

	test('should register a customer and return the saved custumer', async () => {
		const registerCustomerBirthDate = container
			.createChildContainer()
			.register<CustomerRepository>('CustomerRepositoryImpl', CustomerRepositoryImplMock)
			.resolve(RegisterCustomerBirthDate)

		const newCustomer: Customer = {
			birthDate: new Date('1997-07-27T00:00:00.000Z'),
			timeZone: 'America/Sao_Paulo',
			customerId: '789'
		}
		const customerSaved = await registerCustomerBirthDate.execute(newCustomer)

		expect(customerSaved).toEqual(newCustomer)
	})

})
