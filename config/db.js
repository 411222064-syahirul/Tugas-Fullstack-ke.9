const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' }); // 🔥 pakai path absolut

console.log('ENV CHECK:', process.env.DB_USER, process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
  } else {
    console.log('✅ Koneksi database berhasil ke', process.env.DB_NAME);
  }
});

module.exports = db;
