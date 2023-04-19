const express = require("express");
const app = express();
//const database = require("./database/db");
//const Table = database.Table;
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

// app.get("/db.json", (req, res) => {
//   console.log("я здесь");
//   res.render("tutors");
// });

app.get("/user/:username", (req, res) => {
  fetch("/db.json").then(function (response) {
    response.text().then(function (text) {
      user = text;
      console.log(user);
      user = JSON.parse(user);
      console.log(user);

      // document.getElementById('textUser').innerHTML=user.id_user;
    });
    //  fs.readFile("sign_up.ejs", (err, data) => {res.end(data)
    console.log(data);
  });
  let data = {
    username: req.params.username,
    hobbies: ["Footbal", "Scate", "Flowers"],
  };
  //  console.log(req.params);
  res.render("user", data);
});

app.post("/check-user", (req, res) => {
  let username = req.body.username;
  if (username == "") {
    return res.redirect("/sign_up");
  } else {
    return res.redirect("/user/" + username);
  }
});

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

app.get("/db.json", (req, res) => {
  console.log("я здесь");
  res.render("tutors");

 
});

const mysql = require("mysql2/promise");
const config = require("./config");

async function main() {
  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute(
    "select * from user where id_user = 1"
  );
  // console.log(rows[0]['name']);
  let select = await connection.execute("select * from user where id_user = 1");
  // console.log(rows[0]['telephone']);
  let myjson = JSON.stringify(select);
  fs.writeFileSync("db.json", myjson);
  connection.end();

  return rows;
}
async function as() {
  let func = await main();
  return func;
}
as();

// function writeToDb(data,res){
//   data =JSON.parse(data,true);
//   console.log(data);
//   Table.create({
//    id_bitton:data[]
//    count_click:
//   })
// }
