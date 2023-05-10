const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config");
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8081;

require("dotenv").config();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.render("Dance");
});

app.get("/directions", (req, res) => {
  res.render("directions");
});

app.get("/price", (req, res) => {
  res.render("price");
});

app.get("/sign_up", (req, res) => {
  res.render("sign_up");
});

app.get("/timing", (req, res) => {
  res.render("timing");
});

app.get("/tutors", (req, res) => {
  res.render("tutors");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});
const mysql = require("mysql2/promise");

app.get("/adminDB", (req, res) => {
  config.query(
    "SELECT * FROM webdb.statistic join button on button.id_button=statistic.id_button",
    (error, result) => {
      if (error) throw error;
      let myjson = JSON.stringify(result); //
      fs.writeFileSync("db.json", myjson); //
      res.send(result);
      
    }
  );
});


app.post("/clickDB", (req, res) => {
  let answer = req.body.number;
  let dataID=answer;
  console.log("answer - " + answer);
  config.query(
    "UPDATE `statistic` SET `count_click` = `count_click` + 1 where id_button = ?", dataID,
    (err, results) => {
      if (err) console.log("ERROR_________________" + err);
    }
  );
});
