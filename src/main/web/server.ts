import 'reflect-metadata'
import '../shared/container'
import 'express-async-errors'
import app from './configs/app'

const port = process.env.APP_PORT

export default app.listen(port, () => {
  console.log(`Application loaded on port ${port}`)
})