import 'reflect-metadata'
import { DeleteCustomerBirthDate } from '../../../../main/application/usecases/delete-customer-birth-date/delete-customer-birth-date'
import { container } from 'tsyringe'
import { CustomerRepository } from '../../../../main/application/repositories/customer.repository'
import { CustomerRepositoryImplMock } from '../../../mocks/database/adapters/customer-repository-impl.mock'

describe('Delete custumer birth date use case', () => {

	test('should delete a customer and return the saved custumer', async () => {
		const deleteCustomerBirthDate = container
			.createChildContainer()
			.register<CustomerRepository>('CustomerRepositoryImpl', CustomerRepositoryImplMock)
			.resolve(DeleteCustomerBirthDate)

		const customerId = '789'

		const message = await deleteCustomerBirthDate.execute(customerId)

		expect(message).toEqual('deleted')
	})

})
