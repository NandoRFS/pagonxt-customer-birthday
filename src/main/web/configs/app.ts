import 'dotenv/config'

import express from 'express'
import router from '../routes/router'
import errorHandler from '../middlewares/error-handler'
import './database'

const app = express()

app.disable('x-powered-by')
app.disable('etag')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/pagonxt-customer-birthday', router)
app.use(errorHandler)

export default app
