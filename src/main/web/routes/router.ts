import express from 'express'
import customerRoutes from './customer.routes'

const Router = express.Router()

Router.get('/healthcheck', (req, res) => res.json('listening'))
Router.use('/customer', customerRoutes)

export = Router
