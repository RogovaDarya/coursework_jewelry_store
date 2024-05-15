const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'coursework_schema',
  user: 'root',
  password: '09112004rdv',
});

connection.connect(function (err) {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  } else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
});

app.get('/products', (req, res) => {
  connection.query('SELECT * from products', (err, result, fields) => {
    if (err) console.error(err.message);
    res.json(result);
  });
});

app.post('/orders', (req, res) => {
  const order = req.body;

  let sql = `INSERT INTO orders(name, prodInfo, email, phone, obtaining, street, houseNumber, corpus, flat, date, status) 
  values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(
    sql,
    [
      order.name,
      order.prodInfo,
      order.email,
      order.phone,
      order.obtaining,
      order.street,
      order.houseNumber,
      order.corpus.trim() === '' ? null : order.corpus,
      order.flat.trim() === '' ? null : order.flat,
      order.date,
      false,
    ],
    (err, result, fields) => {
      if (err) console.error(err.message);
      res.json(result);
    }
  );
});

app.put('/orders/:id', (req, res) => {
  let sql = `UPDATE orders SET status = ? WHERE id = ?`;
  connection.query(sql, [true, req.params.id], (err, result, fields) => {
    if (err) console.error(err.message);
    res.json(result);
  });
});

app.get('/orders', (req, res) => {
  connection.query('SELECT * from orders', (err, result, fields) => {
    if (err) console.error(err.message);
    res.json(result);
  });
});

app.get('/products/:id', (req, res) => {
  if (!isNaN(parseInt(req.params.id))) {
    connection.query(
      `SELECT * FROM products WHERE id = ${req.params.id}`,
      (err, result, fields) => {
        if (err) console.error(err.message);
        res.json(result);
      }
    );
  } else {
    let sql = 'SELECT * FROM products WHERE brand = ?';

    connection.query(sql, req.params.id, (err, result, fields) => {
      if (err) console.error(err.message);
      res.json(result);
    });
  }
});

app.listen(3000, () => {
  console.log('Server started on 3000');
});
