// const express = require("express");
// const app = express();
// const fs = require("fs");
// require("dotenv").config();
// app.set("view engine", "ejs");

// const config = require("./config");
// const mysql = require("mysql2/promise");

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// const PORT = process.env.PORT || 8081;

// app.listen(PORT, () => {
//   console.log(`Server started: http://localhost:${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.render("Dance");
// });

// app.get("/directions", (req, res) => {
//   res.render("directions");
// });

// app.get("/price", (req, res) => {
//   res.render("price");
// });

// app.get("/sign_up", (req, res) => {
//   res.render("sign_up");
// });

// app.get("/timing", (req, res) => {
//   res.render("timing");
// });

// app.get("/tutors", (req, res) => {
//   res.render("tutors");
// });
// app.get("/admin", (req, res) => {
//   res.render("admin");
// });

// //обновление значений в бд
// async function main() {
//   const connection = await mysql.createConnection(config);
//   let [rows, field] = await connection.execute(
//     "UPDATE `statistic` SET `count_click` = `count_click` + 1 where id_button=1"
//   );
//   console.log(rows[0]);
//   let myjson = JSON.stringify(rows);
//   fs.writeFileSync("db.json", myjson);
//   //connection.end();
//   const sql = `INSERT INTO users(name, age) VALUES('Sam', 31)`;

//   connection.query(sql, function(err, results) {
//       if(err) console.log(err);
//       console.log(results);
//   });
//   return rows;
// }
// async function as() {
//   let func = await main();
//   return func;
// }
// as();

// function writeToDb(data,res){
//   data =JSON.parse(data,true);
//   console.log(data);
//   Table.create({
//    id_bitton:data[]
//    count_click:
//   })
// }

const express = require("express");
const app = express();

//const database = require("./database/db");
//const Table = database.Table;
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

// app.get("/db.json", (req, res) => {
//   console.log("я здесь");
//   res.render("tutors");
// });

// app.get("/user/:username", (req, res) => {
//   //  fs.readFile("sign_up.ejs", (err, data) => {res.end(data)

//   let data = {
//     username: req.params.username,
//     hobbies: ["Footbal", "Scate", "Flowers"],
//   };
//   //  console.log(req.params);
//   res.render("user", data);
// });

// app.post("/check-user", (req, res) => {
//   let username = req.body.username;
//   if (username == "") {
//     return res.redirect("/sign_up");
//   } else {
//     return res.redirect("/user/" + username);
//   }
// });

// const { config } = require('dotenv');
// const mysql= require('mysql');
// const connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'4r3qcas5',
//   database:'webdb'
// });

// connection.connect(err =>{
//   if(err){
//     console.log(err);
//     return err;
//   }
//   else{
//     console.log('database worked');
//   }
// })

//  let query="SELECT * FROM user";

//  connection.query(query,(err,result,field)=>{
//   console.log(err);
//   console.log(result);
//   console.log(result[0]['name']);
//  // console.log(field);
//   return result;
//  });

//  connection.end(err=>{
//   if(err){
//     console.log(err);
//     return err;
//   }
//   else{
//     console.log('database stop');
//   }
//  })

// app.get("/db.json", (req, res) => {
//   console.log("я здесь");
//   res.render("tutors");
// });

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
    config.query("SELECT * FROM statistic", (error, result) => {
    if (error) throw error;
    let myjson = JSON.stringify(result);//
    fs.writeFileSync("db.json", myjson);//
    res.send(result);
    console.log(result);
  });

  // res.send(as());
});

// function writeToDb(data,res){
//   data =JSON.parse(data,true);
//   console.log(data);
//   Table.create({
//    id_bitton:data[]
//    count_click:
//   })
// }
