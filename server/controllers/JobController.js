const Job = require('../models/Job')

module.exports = {
  async add (req, res, next) {
    await Job.create(req.body)
      .then(job => {
        res.send(job)
      })
      .catch(next)
  },
  async jobs  (req, res, next) {
    await Job.find({})
      .then(jobs => {
        res.send(jobs)
      })
      .catch(next)
  },
  async show (req, res, next) {
    await Job.findById(req.params.id)
      .then(job => {
        res.send(job)
      })
      .catch(next)
  }
}
