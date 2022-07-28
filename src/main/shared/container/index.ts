import 'reflect-metadata'
import { container, delay } from 'tsyringe'
import { CustomerRepository } from '../../application/repositories/customer.repository'
import { CustomerRepositoryImpl } from '../../database/adapters/customer-repository-impl'

container.registerSingleton<CustomerRepository>(
	'CustomerRepositoryImpl',
	delay(() => CustomerRepositoryImpl)
)
