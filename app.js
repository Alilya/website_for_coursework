const express = require("express");
const app = express();

const config = require("./config");
const http = require("http");
const fs = require("fs");
require("dotenv").config();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = process.env.PORT || 8081;

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
//const config = require("./config");

//обновление значений в бд
// async function main() {
//   const connection = await mysql.createConnection(config);
//   let [rows, field] = await connection.execute(
//     //"UPDATE `statistic` SET `count_click` = `count_click` + 1 where id_button=1"
//     "select * from statistic"
//   );
//   console.log(rows[0]);
//   let myjson = JSON.stringify(rows);
//   // fs.writeFileSync("db.json", myjson);

//   // const sql = `INSERT INTO users(name, age) VALUES('Sam', 31)`;

//   // connection.query(sql, function(err, results) {
//   //     if(err) console.log(err);
//   //     console.log(results);
//   // });
//   connection.end();
//   return rows;
// }
// async function as() {
//   let func = await main();
//   console.log("мы на бэке");
//   return func;
// }

app.get("/adminDB", (req, res) => {
    config.query("SELECT * FROM webdb.statistic join button on button.id_button=statistic.id_button",
     (error, result) => {
    if (error) throw error;
    let myjson = JSON.stringify(result);//
    fs.writeFileSync("db.json", myjson);//
    res.send(result);
   //console.log(result);
  });

  // res.send(as());
});

