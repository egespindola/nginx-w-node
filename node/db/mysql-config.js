require('dotenv').config();
const mysql = require('mysql')

const connectionPool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_USERPASSW,
  database: process.env.DB_DB
})

module.exports = connectionPool