// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Sequelize 인스턴스 생성
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// 연결 테스트
sequelize.authenticate()
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch(err => {
    console.error('데이터베이스 연결 실패:', err);
  });

module.exports = sequelize;
