// index.js
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // 데이터베이스 연결 불러오기

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('쿼리 실패');
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
