const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

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

app.get("/user", (req, res) => {
  res.render("user");
});

app.get("/user/:username", (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ["Footbal", "Scate", "Flowers"],
  };
  res.render('user', data);
});

app.post('/check-user', (req, res) => {
  let username = req.body.username;
  if (username == "") {
    return res.redirect('/');
  } 
  else {
    return res.redirect('/user/' + username);
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
