const mongoose = require('mongoose')
const Schema = mongoose.Schema
// create a job schema and model
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email field is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
