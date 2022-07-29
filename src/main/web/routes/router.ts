import express from 'express'
import customerRoutes from './customer.routes'
import docsRoutes from './docs.routes'

const Router = express.Router()

Router.get('/healthcheck', (req, res) => res.json('listening'))
Router.use('/customer', customerRoutes)
Router.use('/docs', docsRoutes)

export = Router
