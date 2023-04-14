const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


const sqlite3 = require('sqlite3');
  
// Connecting Database
let db = new sqlite3.Database(":memory:" , (err) => {
    if(err){
        console.log("Error Occurred - " + err.message);
    }
    else{
        console.log("DataBase Connected");
    }
})


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



try{
  app.get("/user/:username", (req, res) => {
    let data = {
      username: req.params.username,
      age: req.params.age,
      telephone: req.params.telephone,
      hobbies: ["Footbal", "Scate", "Flowers"],
    };
    console.log(req.params);
    res.render("user", data);
  });
  
  app.post("/check-user", (req, res) => {
    let username = req.body.username;
    if (username == "") {
      return res.redirect("sign_up");
    } else {
      return res.redirect("/user/" + username);
    }
  });
}
catch{
  app.get((req, res) => {
    res.render("error");
  });
}


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});


/*
const mysql = require("mysql");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4r3qcas5"
});
 
connection.query("CREATE DATABASE mysql",
  function(err, results) {
    if(err) console.log(err);
    else console.log("База данных создана");
});
  
const sql = `create table if not exists users(
  id int primary key auto_increment,
  name varchar(255) not null,
  age int not null
)`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});


const sqlIns= `INSERT INTO users(name, age) VALUES('Sam', 31)`;
 
connection.query(sqlIns, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

connection.end();*/
