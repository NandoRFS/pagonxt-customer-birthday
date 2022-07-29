import { CustomerUpdate } from '../../domain/entities/customer/custumer-update'
import { Customer } from '../../domain/entities/customer/customer'

export interface CustomerRepository {
  insert: (customer: Customer) => Promise<Customer>
  find: () => Promise<Customer[]>
  findOneAndUpdate: (customerId: string, customerUpdate: CustomerUpdate) => Promise<CustomerUpdate>
  delete: (customerId: string) => Promise<string>
}
