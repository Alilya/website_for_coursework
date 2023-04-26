"use strict";
/*document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.elements;
  alert(
    "Ваше Имя: " +
      inputs.Name.value +
      "\n" +
      "Ваш возраст: " +
      inputs.age.value +
      "\n" +
      "Номер телефона: " +
      inputs.phone.value
  );
  let checkboxes = document.querySelectorAll("input:checked");
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  alert("Направления: " + values);
  e.target.reset();
});

if (document.readyState !== "loading") {
  us_clickInterception();
} else {
  document.addEventListener("DOMContentLoaded", us_clickInterception);
}*/
// function submitForm(){
//   event.preventDefault();
//   let form = document.querySelectorAll('form').elements;
//   console.log(form);
// }

// function dbInsert() {
//   let user = 123;
//   console.log("и я здесь");
//   fetch("/db.json").then(function (response) {
//     response.text().then(function (text) {
//       user = text;
//       console.log(user);
//       user = JSON.parse(user);
//       console.log(user);

//       // document.getElementById('textUser').innerHTML=user.id_user;
//     });
//   });
// }

//выввод статистики
let button = document.getElementById("button-sub");
let password = document.getElementById("password");
function viewDiv() {
  document.getElementById("text-hidden").style.display = "block";
  document.getElementById("password").style.display = "none";
  document.getElementById("img-admin").style.display = "none";
  document.getElementById("button-sub").style.display = "none";
  //document.getElementById("myCanvas").style.display = "none";

  fetch("/adminDB") //вот тут фигня получается, выводит без значений
    .then((response) => response.json())
    .then(function (response) {
      //console.log(response)
      for (let obj in response) {
        print(response[obj].name_button, response[obj].count_click);
      }
      fill(response[obj].count_click);
    });

  function print(name, click) {
    document.querySelector(".posts")
    .innerHTML += `<h4>name=${name} и Количество нажатий - ${click}</h4>`;
   
    // console.log("Пришло в print  " + data);
  }
 
}
function fill(click){
  for(let obj in click){
    let arr = {Classic:click[obj]}
  }
  return arr
}
var myVinyls = {
  ////////////////////////////////////////////////////////////////
  "Classical music": 10,
  "Alternative rock": 14,
  Pop: 2,
  Jazz: 12,
}

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}
function drawBar(
  ctx,
  upperLeftCornerX,
  upperLeftCornerY,
  width,
  height,
  color
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}
// var myVinyls = {
//   ////////////////////////////////////////////////////////////////
//   "Classical music": 10,
//   "Alternative rock": 14,
//   Pop: 2,
//   Jazz: 12,
// };
var Barchart = function (options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;
  this.draw = function () {
    var maxValue = 0;
    for (var categ in this.options.data) {
      maxValue = Math.max(maxValue, this.options.data[categ]);
    }
    var canvasActualHeight = this.canvas.height - this.options.padding * 2;
    var canvasActualWidth = this.canvas.width - this.options.padding * 2;
    //drawing the grid lines
    var gridValue = 0;
    while (gridValue <= maxValue) {
      var gridY =
        canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;
      drawLine(
        this.ctx,
        0,
        gridY,
        this.canvas.width,
        gridY,
        this.options.gridColor
      );
      //writing grid markers
      this.ctx.save();
      this.ctx.fillStyle = this.options.gridColor;
      this.ctx.font = "bold 10px Arial";
      this.ctx.fillText(gridValue, 10, gridY - 2);
      this.ctx.restore();
      gridValue += this.options.gridScale;
    }
    //drawing the bars
    var barIndex = 0;
    var numberOfBars = Object.keys(this.options.data).length;
    var barSize = canvasActualWidth / numberOfBars;
    for (categ in this.options.data) {
      var val = this.options.data[categ];
      var barHeight = Math.round((canvasActualHeight * val) / maxValue);
      drawBar(
        this.ctx,
        this.options.padding + barIndex * barSize,
        this.canvas.height - barHeight - this.options.padding,
        barSize,
        barHeight,
        this.colors[barIndex % this.colors.length]
      );
      barIndex++;
    }
    this.ctx.save();
    this.ctx.textBaseline = "bottom";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#000000";
    this.ctx.font = "bold 14px Arial";
    this.ctx.fillText(
      this.options.seriesName,
      this.canvas.width / 2,
      this.canvas.height
    );
    this.ctx.restore();
    barIndex = 0;
    var legend = document.querySelector("legend[for='myCanvas']");
    var ul = document.createElement("ul");
    legend.append(ul);
    for (categ in this.options.data) {
      var li = document.createElement("li");
      li.style.listStyle = "none";
      li.style.borderLeft =
        "20px solid " + this.colors[barIndex % this.colors.length];
      li.style.padding = "5px";
      li.textContent = categ;
      ul.append(li);
      barIndex++;
    }
  };
};

var myBarchart = new Barchart({
  canvas: myCanvas,
  seriesName: "Vinyl records",
  padding: 20,
  gridScale: 5,
  gridColor: "#eeeeee",
  data: myVinyls,
  colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"],
});

myBarchart.draw();

//let buttons;
// document.addEventListener("DOMContentLoaded", makeCounter);

//  function makeCounter() {
//    buttons = document.querySelectorAll(".button-price");
//    for (let btn of buttons) {
//      btn.onclick = btn_click();
//    }
//  }
//  function btn_click() {
//    let count = (+this.textContent || 0) + 1;
//    this.textContent = count;
//    console.log(count);
//  }

button.addEventListener("click", (e) => {
  e.preventDefault();
  // if (password.value == "1234") {
  viewDiv();
  //} else {
  // alert(password.value);
  //alert("Неверный пароль!");
  //}
});
