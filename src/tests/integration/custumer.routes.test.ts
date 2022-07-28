import request from 'supertest'
import app from '../../main/web/configs/app'

import { disconnect, dropCollection } from '../../main/web/configs/database'

const contextApiPath = '/pagonxt-customer-birthday'

describe('Customer route /customer', () => {

	afterAll((done) => {
		dropCollection('customers')
		disconnect(done)
	})

	// TODO fazer post antes do get e usar como retorno do GET para validar new Date() + 1 day

	test('[GET - /birthday] Should return', async () => {
		const response = await request(app).get(`${contextApiPath}/customer/birthday`)
		expect(response.statusCode).toBe(200)
	})

	test('[POST - /birthday] Should return', async () => {
		const response = await request(app)
			.post(`${contextApiPath}/customer/birthday`)
			.send({ birthDate: '1990-07-29', timeZone: 'Asia/Tokyo', customerId: '12121121211' })

		expect(response.statusCode).toBe(201)
	})

	test('[POST - /birthday] Should return', async () => {
		const response = await request(app)
			.post(`${contextApiPath}/customer/birthday`)
			.send({ birthDate: '1990-07-29', timeZone: 'Asia/Tokyo' })

		expect(response.statusCode).toEqual(400)
	})
})
