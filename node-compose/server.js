const express = require('express');
const redis = require('redis');

// docker compose를 통해 redis를 사용할 땐 host 옵션을 docker-componse.yml에 명시한 컨테이너 이름으로 준다.
const client = redis.createClient({
  host: 'redis-server',
  port: '6379'
});

const app = express();
const port = 3000;

client.set('count', 0);

app.get('/', (req, res) => {
  client.get('count', (err, count) => {
    client.set('count', (count - 0) + 1);
    if (err) {
      res.send('에러 발생 : ', err);
    } else {
      res.send(`숫자가 1씩 올라갑니다. 숫자 : ${count}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
