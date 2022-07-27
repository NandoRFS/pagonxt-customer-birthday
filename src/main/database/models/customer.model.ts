import mongoose from "mongoose"

const Schema = mongoose.Schema

const customer = new Schema({
  birthDate: Date,
  timeZone: String,
  customerId: String
})

export default mongoose.model('Customer', customer)