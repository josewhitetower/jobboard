const mongoose = require('mongoose')
const Schema = mongoose.Schema
// create a job schema and model
const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  company: {
    type: String,
    required: [true, 'Company is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  published: {
    type: Boolean,
    default: false
  }
})

const Job = mongoose.model('job', JobSchema)

module.exports = Job
