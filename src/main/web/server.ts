import 'reflect-metadata'
import app from './configs/app'
import * as database from './configs/database'

const port = process.env.PORT

database.connect()

export default app.listen(port, () => {
	console.log(`Application loaded on port ${port}`)
})
