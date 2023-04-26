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

  fetch("/adminDB") //вот тут фигня получается, выводит без значений
    .then((response) => response.json())
    .then(function(response){
      //console.log(response)
      for(let obj in response){
        print(response[obj].name_button, response[obj].count_click);
      }
    })

   function print(name,click) {
    document.querySelector(".posts").innerHTML += 
    `<h4>name=${name} и Количество нажатий - ${click}</h4>
`;
   // console.log("Пришло в print  " + data);
  }

}



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
