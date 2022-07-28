import request from 'supertest'
import app from '../../main/web/configs/app'

import { disconnect } from '../../main/web/configs/database'

const contextApiPath = '/pagonxt-customer-birthday'

describe('Healthcheck path', () => {
	afterAll((done) => {
		disconnect(done)
	})

	test('Should return a message if application is listening', async () => {
		const response = await request(app).get(`${contextApiPath}/healthcheck`)
		expect(response.statusCode).toBe(200)
		expect(JSON.parse(response.text)).toEqual('listening')
	})
})
