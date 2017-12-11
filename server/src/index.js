
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('../routes/routes.js')
const config = require('../config/config.js')

const app = express()
// connect to mongodb

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

// error handling
app.use(function (err, req, res, next) {
  res.send({error: err.message})
})

app.listen(process.env.PORT || config.port)
