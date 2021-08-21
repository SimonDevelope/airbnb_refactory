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

const errorMessage = {
  400: "Bad Request: 잘못된 요청입니다.",
  401: "Unauthorized: 권한이 없습니다.",
  403: "Forbidden: 서버에서 거절되었습니다.",
  404: "Not Found: 요청하신 주소를 확인해 주십시오",
};

app.get("/", (req, res) => {
  const sql = "SELECT * FROM information";
  connection.query(sql, (err, result) => {
    if (err) {
      if (res.status === 400) {
        res.status(400).send(errorMessage[400]);
      } else if (res.status === 401) {
        res.status(401).send(errorMessage[401]);
      } else if (res.status === 403) {
        res.status(403).send(errorMessage[403]);
      } else if (res.status === 404) {
        res.status(404).send(errorMessage[404]);
      }
    } else {
      res.send(result);
    }
  });
});

app.get("/tobelive", (req, res) => {
  const sql = "SELECT * FROM tobelive";
  connection.query(sql, (err, result) => {
    if (err) {
      if (res.status === 400) {
        res.status(400).send(errorMessage[400]);
      } else if (res.status === 401) {
        res.status(401).send(errorMessage[401]);
      } else if (res.status === 403) {
        res.status(403).send(errorMessage[403]);
      } else if (res.status === 404) {
        res.status(404).send(errorMessage[404]);
      }
    } else {
      res.send(result);
    }
  });
});

app.get("/lookforexperi", (req, res) => {
  const sql = "SELECT * FROM lookforexperi";
  connection.query(sql, (err, result) => {
    if (err) {
      if (res.status === 400) {
        res.status(400).send(errorMessage[400]);
      } else if (res.status === 401) {
        res.status(401).send(errorMessage[401]);
      } else if (res.status === 403) {
        res.status(403).send(errorMessage[403]);
      } else if (res.status === 404) {
        res.status(404).send(errorMessage[404]);
      }
    } else {
      res.send(result);
    }
  });
});

app.get("/location", (req, res) => {
  const sql = "SELECT * FROM location";
  connection.query(sql, (err, result) => {
    if (err) {
      if (res.status === 400) {
        res.status(400).send(errorMessage[400]);
      } else if (res.status === 401) {
        res.status(401).send(errorMessage[401]);
      } else if (res.status === 403) {
        res.status(403).send(errorMessage[403]);
      } else if (res.status === 404) {
        res.status(404).send(errorMessage[404]);
      }
    } else {
      res.send(result);
    }
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
        results,
        message: "success",
      };
      res.status(201).send(response);
    }
  });
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
