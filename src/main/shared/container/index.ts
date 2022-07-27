import { container } from "tsyringe";
import { CustomerRepository } from "../../application/repositories/customer.repository";
import { CustomerRepositoryImpl } from "../../database/adapters/customer-repository-impl";


container.registerSingleton<CustomerRepository>(
  "CustomerRepositoryImpl",
  CustomerRepositoryImpl
)