import express from 'express'
import { CustomerController } from '../controllers/customer.controller'
import CustomerValidator from '../middlewares/customer-validator'

const router = express.Router()

const customerController = new CustomerController()

router.post('/birthday', CustomerValidator.validate, customerController.insert)
router.get('/birthday', customerController.find)

export default router
