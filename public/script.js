"use strict";
//let button = document.getElementById("button-sub");
let password = document.getElementById("password");

async function viewDiv() {
  document.getElementById("text-hidden").style.display = "block";
  document.getElementById("password").style.display = "none";
  document.getElementById("img-admin").style.display = "none";
  document.getElementById("button-sub").style.display = "none";
  document.getElementById("myChart").style.display = "block";

  fetch("/adminDB") //выводит основную инфу
    .then((res) => res.json())
    .then(function (res) {
      let arr = [];
      for (let obj in res) {
        arr.push(res[obj].count_click);
        //print(response[obj].name_button, response[obj].count_click);
        print(arr, res[obj].name_button, res[obj].count_click);
      }
    })
    .catch((error) => {
      throw error;
    });

  fetch("/adminDB")
    .then((response) => response.json())
    .then(function (obj) {
      //console.log(obj);
      let acc = { name_button: [], count_click: [] };

      obj.forEach(function (item) {
        acc.name_button.push(item.name_button);
        acc.count_click.push(item.count_click);
      });

      //console.log(acc);
      chart(acc.name_button, acc.count_click);
    });
}

function print(arr, name, click) {
  document.querySelector(
    ".posts"
  ).innerHTML += `<p> Название курса: ${name}<br> Количество записей на курс: ${click}</p>`;
  if (arr.length < 8) return;
  //pringGraph(arr);
  // console.log(arr);
}

document
.querySelectorAll(".button-price")
.forEach((btn) => {
  btn.addEventListener("mousedown", (e) => {
    let buttonId = e.target.value;
    fetch("/clickDB", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: buttonId,
      }),
    });
  });
});

// const jsString = JSON.stringify({
//   receiver: buttonsVal
//})

//   let user = {
//     name: 'John',
//     surname: 'Smith'
//   };

//   let response = await fetch('/clickDB', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   });

//   let result = await response.json();
//   alert(result.message);
// }

function chart(lab, dat) {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: lab,
      datasets: [
        {
          label: "# of Votes",
          //data: [12, 19, 3, 5, 2, 3],
          data: dat,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
let button = document.getElementById("button-sub");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value === "1234") {
    //////////////
    viewDiv();
    return true;
  } else {
    alert(password.value);
    alert("Неверный пароль!");
    return false;
  }
});

//let response = await fetch('/1');
//if (response.ok){
// let json =await response.json()
//}

// fetch("/1")
//   .then((response) => response.json())
//   .then(function (obj) {
//     console.log(obj);
//     acc = { sec_title: [], c: [] };

//     obj.forEach(function (item, index, array) {
//       acc.sec_title.push(item.sec_title);
//       acc.c.push(item.c);
//     });

//     console.log(acc);
//     chart(acc.sec_title, acc.c);
//   });

// function chart(lab, dat) {
//   const ctx = document.getElementById("myChart");

//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       labels: lab,
//       datasets: [
//         {
//           label: "# of Votes",
//           //data: [12, 19, 3, 5, 2, 3],
//           data: dat,
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }

// var el = "rate-55345";
// var numEl = parseInt(el.match(/\d+/));

// function printGraf(arr) {
//   //myV["Абонемент ЭКСКУРСИЯ"] = num;
//   var myV = {
//     "Пробное/разовое занятие": arr[0],
//     "Абонемент на 8 занятий": 11,
//     "Абонемент ЭКСКУРСИЯ": 11,
//     "Абонемент на 6 занятий": 22,
//     "Абонемент на 12 занятий": 12,
//     "Безлимитный абонемент на месяц": 22,
//     "Безлимитный абонемент на месяц+": 5,
//     "Безлимитный абонемент на год": 6,
//   };
//   return myV;
// }

// //myV["Абонемент ЭКСКУРСИЯ"] = 100;

// var myCanvas = document.getElementById("myCanvas");
// myCanvas.width = 600;
// myCanvas.height = 300;
// var ctx = myCanvas.getContext("2d");

// function drawLine(ctx, startX, startY, endX, endY, color) {
//   ctx.save();
//   ctx.strokeStyle = color;
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(endX, endY);
//   ctx.stroke();
//   ctx.restore();
// }
// function drawBar(
//   ctx,
//   upperLeftCornerX,
//   upperLeftCornerY,
//   width,
//   height,
//   color
// ) {
//   ctx.save();
//   ctx.fillStyle = color;
//   ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
//   ctx.restore();
// }

// var Barchart = function (options) {
//   this.options = options;
//   this.canvas = options.canvas;
//   this.ctx = this.canvas.getContext("2d");
//   this.colors = options.colors;

//   this.draw = function () {
//     var maxValue = 0;
//     for (var categ in this.options.data) {
//       maxValue = Math.max(maxValue, this.options.data[categ]);
//     }
//     var canvasActualHeight = this.canvas.height - this.options.padding * 2;
//     var canvasActualWidth = this.canvas.width - this.options.padding * 2;
//     //drawing the grid lines
//     var gridValue = 0;
//     while (gridValue <= maxValue) {
//       var gridY =
//         canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;
//       drawLine(
//         this.ctx,
//         0,
//         gridY,
//         this.canvas.width,
//         gridY,
//         this.options.gridColor
//       );
//       //writing grid markers
//       this.ctx.save();
//       this.ctx.fillStyle = this.options.gridColor;
//       this.ctx.font = "bold 10px Arial";
//       this.ctx.fillText(gridValue, 10, gridY - 2);
//       this.ctx.restore();
//       gridValue += this.options.gridScale;
//     }
//     //drawing the bars
//     var barIndex = 0;
//     var numberOfBars = Object.keys(this.options.data).length;
//     var barSize = canvasActualWidth / numberOfBars;
//     for (categ in this.options.data) {
//       var val = this.options.data[categ];
//       var barHeight = Math.round((canvasActualHeight * val) / maxValue);
//       drawBar(
//         this.ctx,
//         this.options.padding + barIndex * barSize,
//         this.canvas.height - barHeight - this.options.padding,
//         barSize,
//         barHeight,
//         this.colors[barIndex % this.colors.length]
//       );
//       barIndex++;
//     }
//     this.ctx.save();
//     this.ctx.textBaseline = "bottom";
//     this.ctx.textAlign = "center";
//     this.ctx.fillStyle = "#000000";
//     this.ctx.font = "bold 14px Arial";
//     this.ctx.fillText(
//       this.options.seriesName,
//       this.canvas.width / 2,
//       this.canvas.height
//     );

//     this.ctx.restore();
//     barIndex = 0;
//     var legend = document.querySelector("legend[for='myCanvas']");
//     var ul = document.createElement("ul");
//     legend.append(ul);
//     for (categ in this.options.data) {
//       var li = document.createElement("li");
//       li.style.listStyle = "none";
//       li.style.borderLeft =
//         "20px solid " + this.colors[barIndex % this.colors.length];
//       li.style.padding = "5px";
//       li.textContent = categ;
//       ul.append(li);
//       barIndex++;
//     }
//   };
// };

// var myBarchart = new Barchart({
//   canvas: myCanvas,
//   seriesName: "Статистика по курсам",
//   padding: 30,
//   gridScale: 1,
//   gridColor: "#787878",
//   data: arr,
//   colors: [
//     "#a55ca5",
//     "#FA8072",
//     "#bccd7a",
//     "#eb9743",
//     "#20B2AA",
//     "#000080",
//     "#A52A2A",
//     "#00FF7F",
//   ],
// });

// myBarchart.draw();

// let buttons;
// document.addEventListener("DOMContentLoaded", makeCounter);

// function makeCounter() {
//   buttons = document.querySelectorAll(".button-price");
//   for (let btn of buttons) {
//     btn.onclick = btn_click();
//   }
// }
// function btn_click() {
//   let count = (+this.textContent || 0) + 1;
//   this.textContent = count;
//   console.log(count);
// }
