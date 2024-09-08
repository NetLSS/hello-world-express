// index.js

const express = require('express');
const app = express();
const port = 3000;

// 루트 경로로 요청이 들어오면 "Hello World"를 응답합니다.
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 서버를 시작하고 3000번 포트에서 요청을 받습니다.
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
