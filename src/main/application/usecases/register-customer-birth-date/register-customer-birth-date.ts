import { CustomerData } from "../../../domain/entities/customer/customer-data";
import { Customer } from "../../../domain/entities/customer/customer";
import { CustomerRepository } from "../../repositories/customer.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class RegisterCustomerBirthDate {
  private repository: CustomerRepository

  constructor(
    @inject('CustomerRepositoryImpl')
    repository: CustomerRepository
  ) {
    this.repository = repository
  }

  async execute(customerData: CustomerData) {
    let customer = Customer.create(customerData)
    const data = await this.repository.insert(customer)

    return data
  }

}