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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/location", (req, res) => {
  const sql = "SELECT * FROM location";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/location", (req, res) => {
  const location = req.body.location;
  const adult = req.body.adult;
  const child = req.body.child;
  const infant = req.body.infant;
  const sql =
    "INSERT INTO location (location, adult, child, infant) VALUES (?, ?, ?, ?)";
  connection.query(sql, [location, adult, child, infant], (error, results) => {
    // error가 있는 경우
    if (error) {
      const response = {
        message: "error",
      };

      res.status(504).send(response);
      // error가 없는 경우
    } else {
      const response = {
        results,
        message: "success",
      };

      // 이런 식으로 response의 body에 여러 field를 담은 객체를 보낼 수도 있다.
      res.status(201).send(response);
    }
  });
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
