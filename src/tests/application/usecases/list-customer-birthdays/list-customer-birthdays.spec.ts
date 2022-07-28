import 'reflect-metadata'
import { listCustumerBirthdaysMock } from '../../../mocks/application/usecases/list-customer-birthdays/list-customer-birthdays.mock'
import { ListCustomerBirthDays } from '../../../../main/application/usecases/list-customer-birthdays.ts/list-customer-birthdays'
import { container } from 'tsyringe'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { CustomerRepositoryImplMock } from '../../../mocks/database/adapters/customer-repository-impl.mock'


describe('List customer birthdays use case', () => {

	test('should return a list of birthday customers of the day', async () => {
		const listCustomerBirthDays = container
			.createChildContainer()
			.register<CustomerRepository>('CustomerRepositoryImpl', CustomerRepositoryImplMock)
			.resolve(ListCustomerBirthDays)

		const customerBirthdays = await listCustomerBirthDays.execute()

		expect(customerBirthdays).toBe(listCustumerBirthdaysMock)

	})

})
