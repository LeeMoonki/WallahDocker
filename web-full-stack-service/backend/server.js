const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

db.pool.query(`CREATE TABLE lists (
  id INTEGER AUTO_INCREMENT,
  value TEXT,
  PRIMARY KEY (id)
)`, (err, results, fields) => {
  console.log('table create results : ', results);
});

app.get('/api/values', (req, res, next) => {
  db.pool.query('SELECT * FROM lists;', (err, results, fields) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json(results);
    }
  });
});

app.post('/api/values', (req, res, next) => {
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`, (err, results, fields) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json({ success: true, value: req.body.value });
    }
  });
});

app.listen(PORT, () => {
  console.log('서버 리스닝 : ', PORT);
});
