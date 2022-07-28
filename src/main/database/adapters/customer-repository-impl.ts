import { Customer } from '../../domain/entities/customer/customer'
import { CustomerRepository } from '../../application/repositories/customer.repository'
import CustomerModel from '../models/customer.model'

export class CustomerRepositoryImpl implements CustomerRepository {

  async insert(customer: any): Promise<Customer> {
    await CustomerModel.create(customer)
    return customer
  }

  async find(): Promise<any[]> {
    const data = await CustomerModel.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: [{ $dayOfMonth: '$birthDate' }, {
                  $dayOfMonth: {
                    date: new Date(),
                    timezone: '$timeZone'
                  }
                }]
              },
              {
                $eq: [{ $month: '$birthDate' }, {
                  $month: {
                    date: new Date(),
                    timezone: '$timeZone'
                  }
                }]
              },
            ],
          },
        }
      },
      {
        $unset: ["__v", "_id"]
      }
    ])

    return data
  }
}
