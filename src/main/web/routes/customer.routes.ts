import express from 'express'
import { CustomerController } from '../controllers/customer.controller'
import CustomerValidator from '../middlewares/customer-validator'

const router = express.Router()

const customerController = new CustomerController()

router.post('/birthday', CustomerValidator.createValidation, customerController.insert)
router.get('/birthday', customerController.find)
router.put('/birthday/:customerId', CustomerValidator.updateValidation, customerController.update)
router.delete('/birthday/:customerId', customerController.delete)

export default router
