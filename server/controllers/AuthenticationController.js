const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  register (req, res, next) {
    User.create(req.body)
      .then(user => {
        res.send(user)
      })
      .catch(next)
  },
  login (req, res, next) {
    const {email, password} = req.body
    User.findOne({email: email}, function (err, user) {
      if (err) {
        console.log(err)
        return res.send(err)
      }
      if (!user) {
        return res.send({error: 'The email was incorrect'})
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.send({error: 'The password  was incorrect'})
      }
      const token = jwtSignUser({email: email, password: password})
      return res.send({user, token})
    })
  }
}
