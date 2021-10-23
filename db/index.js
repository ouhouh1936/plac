const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql2.createPool({
  port: 3306,
  host: process.env.DB_PORT,
  user: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = db;
