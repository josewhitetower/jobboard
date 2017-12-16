const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const config = require('../config/config.js')
const JobController = require('../controllers/JobController')
const AuthenticationController = require('../controllers/AuthenticationController')
const Job = require('../models/Job')

mongoose.connect(`mongodb://${config.db.host}/${config.db.database}`)
mongoose.Promise = global.Promise

router.post('/add', JobController.add)
router.post('/register', AuthenticationController.register)
router.post('/login', AuthenticationController.login)
router.get('/jobs', JobController.jobs)
router.get('/jobs/:id', JobController.show)
router.put('/jobs/:id', JobController.edit)
router.get('/', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.send(jobs)
    })
    .catch(next)
})

module.exports = router
