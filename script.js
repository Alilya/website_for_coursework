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
//   let user=123;
//   console.log('и я здесь');
//   fetch("/db.json").then(function (response) {
//     response.text().then(function (text) {
//       user=text;
//       console.log(user);
//       user = JSON.parse(user);
//       console.log(user);
     
//      // document.getElementById('textUser').innerHTML=user.id_user;

//     });
//   });
// }
// dbInsert();
 document.addEventListener('click',dbInsert);