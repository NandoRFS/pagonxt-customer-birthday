import 'reflect-metadata'
import { UpdateCustomerBirthDate } from '../../../../main/application/usecases/update-customer-birth-date/update-customer-birth-date'
import { container } from 'tsyringe'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { CustomerRepositoryImplMock } from '../../../mocks/database/adapters/customer-repository-impl.mock'

describe('Update custumer birth date use case', () => {

	test('should update a customer and return the saved custumer', async () => {
		const updateCustomerBirthDate = container
			.createChildContainer()
			.register<CustomerRepository>('CustomerRepositoryImpl', CustomerRepositoryImplMock)
			.resolve(UpdateCustomerBirthDate)

		const customerId = '789'
		const newCustomerFields = {
			birthDate: new Date('1997-07-27T00:00:00.000Z'),
			timeZone: 'America/Sao_Paulo'
		}

		const customerSaved = await updateCustomerBirthDate.execute(customerId, newCustomerFields)

		expect(customerSaved).toEqual(newCustomerFields)
	})

})
