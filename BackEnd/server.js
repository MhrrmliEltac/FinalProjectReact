const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hosting",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO istifadeci (name, email, password) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({ message: "User registered successfully", data });
    }
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT name FROM istifadeci";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM istifadeci WHERE name = ? AND password = ?";
  const values = [req.body.username, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      return res.json({ success: true, message: "Sign in successful" });
    } else {
      return res.json({
        success: false,
        message: "Invalid username or password",
      });
    }
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
