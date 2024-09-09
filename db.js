// db.js
require('dotenv').config();

const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// 연결 확인
connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패: ', err);
  } else {
    console.log('데이터베이스 연결 성공');
  }
});

module.exports = connection;
