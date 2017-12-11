const Job = require('../models/Job')

module.exports = {
  register (req, res, next) {
    Job.create(req.body)
      .then(job => {
        res.send(job)
      })
      .catch(next)
  },
  jobs  (req, res, next) {
    Job.find({})
      .then(jobs => {
        res.send(jobs)
      })
      .catch(next)
  }
}
