const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const config = require('../config/config.js')
const JobController = require('../controllers/JobController')
const Job = require('../models/Job')

mongoose.connect(`mongodb://${config.db.host}/${config.db.database}`)
mongoose.Promise = global.Promise

router.post('/register', JobController.register)
router.get('/jobs', JobController.jobs)
router.get('/', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.send(jobs)
    })
    .catch(next)
})

module.exports = router
