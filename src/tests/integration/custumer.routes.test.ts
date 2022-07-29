import request from 'supertest'
import app from '../../main/web/configs/app'
import '../../main/web/configs/dotenv'
import { disconnect, dropCollection, connect } from '../../main/web/configs/database'

const contextApiPath = '/pagonxt-customer-birthday'

describe('Customer route /customer', () => {

	beforeAll(async () => {
		console.log('process', process.env.URI)
		await connect()
	})

	afterAll((done) => {
		dropCollection('customers')
		disconnect(done)
	})

	test('[GET - /birthday] Should return', async () => {
		const response = await request(app).get(`${contextApiPath}/customer/birthday`)
		expect(response.statusCode).toBe(200)
	})

	test('[POST - /birthday] Should return', async () => {
		const response = await request(app)
			.post(`${contextApiPath}/customer/birthday`)
			.send({ birthDate: '1990-07-29', timeZone: 'Asia/Tokyo', customerId: '123' })

		expect(response.statusCode).toBe(201)
	})

	test('[POST - /customer/birthday] Should return', async () => {
		const response = await request(app)
			.post(`${contextApiPath}/customer/birthday`)
			.send({ birthDate: '1990-07-29', timeZone: 'Asia/Tokyo' })

		expect(response.statusCode).toEqual(400)
	})

	test('[PUT - /customer/birthday] Should return', async () => {
		const customerId = '123'
		const body = { birthDate: '1990-07-29', timeZone: 'America/Sao_Paulo' }
		const response = await request(app)
			.put(`${contextApiPath}/customer/birthday/${customerId}`)
			.send(body)

		expect(response.statusCode).toBe(204)
	})

	test('[PUT - /customer/birthday] Should return', async () => {
		const customerId = 'invalid123'
		const body = { birthDate: '1990-07-29', timeZone: 'America/Sao_Paulo' }
		const response = await request(app)
			.put(`${contextApiPath}/customer/birthday/${customerId}`)
			.send(body)

		expect(response.statusCode).toBe(404)
	})

	test('[DELETE - /customer/birthday] Should return', async () => {
		const customerId = '123'
		const response = await request(app)
			.delete(`${contextApiPath}/customer/birthday/${customerId}`)

		expect(response.statusCode).toBe(200)

	})
})
