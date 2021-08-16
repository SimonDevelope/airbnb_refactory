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
  connection.query(sql, (error, results) => {
    if (error) {
      const response = {
        message: "error",
      };
      res.status(400).send(response);
      res.status(401).send(response);
      res.status(403).send(response);
      res.status(404).send(response);
    } else {
      const response = {
        message: "success",
      };
      res.status(200).send(response);
    }
  });
});

app.get("/tobelive", (req, res) => {
  const sql = "SELECT * FROM tobelive";
  connection.query(sql, (error, results) => {
    if (error) {
      const response = {
        message: "error",
      };
      res.status(400).send(response);
      res.status(401).send(response);
      res.status(403).send(response);
      res.status(404).send(response);
    } else {
      const response = {
        message: "success",
      };
      res.status(200).send(response);
    }
  });
});

app.get("/lookforexperi", (req, res) => {
  const sql = "SELECT * FROM lookforexperi";
  connection.query(sql, (error, results) => {
    if (error) {
      const response = {
        message: "error",
      };
      res.status(400).send(response);
      res.status(401).send(response);
      res.status(403).send(response);
      res.status(404).send(response);
    } else {
      const response = {
        message: "success",
      };
      res.status(200).send(response);
    }
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
    if (error) {
      const response = {
        message: "error",
      };
      res.status(504).send(response);
    } else {
      const response = {
        message: "success",
      };
      res.status(201).send(response);
    }
  });
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
