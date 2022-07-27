import { BirthDate } from "./birth-date"
import { CustomerData } from "./customer-data"
import { CustomerId } from "./customer-id"
import { TimeZone } from "./timezone"

export class Customer {
  birthDate: Date
  timeZone: string
  customerId: string

  private constructor(birthDate: Date, timeZone: string, customerId: string) {
    this.birthDate = birthDate
    this.timeZone = timeZone
    this.customerId = customerId
    Object.freeze(this)
  }

  static create(customerData: CustomerData): Customer {
    const createBirthDate: BirthDate = BirthDate.create(customerData.birthDate)
    const createTimezone: TimeZone = TimeZone.create(customerData.timeZone)
    const createCustomerId: CustomerId = CustomerId.create(customerData.customerId)

    const birthDate = createBirthDate.value
    const timeZone = createTimezone.value
    const customerId = createCustomerId.value

    return new Customer(birthDate, timeZone, customerId)
  }

}
