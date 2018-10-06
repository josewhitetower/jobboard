'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('./config')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: `"${config.API_KEY}"`})
