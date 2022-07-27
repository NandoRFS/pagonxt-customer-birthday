import mongoose from "mongoose"

const URI = String(process.env.URI)

mongoose.set('debug', true)

mongoose.connect(URI)
  .then(() => console.log('DB is running'))
  .catch((err) => console.log(err))