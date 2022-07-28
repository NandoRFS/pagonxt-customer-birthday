import 'reflect-metadata'
import app from './configs/app'

const port = process.env.APP_PORT

export default app.listen(port, () => {
	console.log(`Application loaded on port ${port}`)
})