module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'jobboard',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    host: process.env.DB_HOST || 'localhost'
  }
}
