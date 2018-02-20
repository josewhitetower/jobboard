require('dotenv').config({ path: 'variables.env' })

module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'jobboard',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    host: process.env.DB_HOST || 'localhost'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  env: process.env.ENV || 'dev'
}
