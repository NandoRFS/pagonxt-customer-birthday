import { Customer } from '../../../../../main/domain/entities/customer/customer'

export class DuplicatedValueError extends Error {
	constructor(message) {
		super(message)
	}
}

const savedCustomerBirthDate = [
	{
		birthDate: new Date('1997-07-28T00:00:00.000Z'),
		timeZone: 'Asia/Tokyo',
		customerId: '123'
	},
	{
		birthDate: new Date('1997-07-27T00:00:00.000Z'),
		timeZone: 'America/Sao_Paulo',
		customerId: '456'
	}
]

export function registerCustomerBirthDate(customer: Customer): void {
	if (customerHasAlreadyBeenRegistered(customer.customerId)) {
		throw new DuplicatedValueError(`duplicated value: ${JSON.stringify({ customerId: customer.customerId })}`)
	}
}


function customerHasAlreadyBeenRegistered(custumerId: string): boolean {
	const alreadyRegistered = savedCustomerBirthDate.find((customer: Customer) => customer.customerId === custumerId)
	return alreadyRegistered !== undefined
}
