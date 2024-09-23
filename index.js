// index.js
const express = require('express');
const app = express();
const port = 3000;
const User = require('./models/User');

app.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); // 모든 사용자 조회
    res.send(users);
  } catch (err) {
    res.status(500).send('데이터 조회 실패');
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
