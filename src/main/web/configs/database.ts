import mongoose from 'mongoose'

const URI = String(process.env.URI)

mongoose.set('debug', true)

export function disconnect(done) {
	mongoose.disconnect(done)
}

export async function connect() {
	mongoose.connect(URI)
		.then(() => console.log('DB up!'))
		.catch((err) => console.log(err))
}

export async function dropCollection(collection: string) {
	await mongoose.connection.dropCollection(collection)
}
