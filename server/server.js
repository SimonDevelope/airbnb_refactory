require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = process.env.DB_PORT || 4001;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM information";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/tobelive", (req, res) => {
  const sql = "SELECT * FROM tobelive";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/lookforexperi", (req, res) => {
  const sql = "SELECT * FROM lookforexperi";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
