import { Customer } from '../../domain/entities/customer/customer'

export interface CustomerRepository {
  insert: (customer: Customer) => Promise<Customer>
  find: () => Promise<any[]>
}
