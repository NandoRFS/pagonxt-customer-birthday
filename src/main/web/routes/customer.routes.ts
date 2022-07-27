import express from 'express'
import { CustomerController } from '../controllers/customer.controller'

const router = express.Router()

const customerController = new CustomerController()

router.post('/birthday', customerController.insert)
router.get('/birthday', customerController.find)

export default router
