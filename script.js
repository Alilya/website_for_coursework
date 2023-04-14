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
});*/

if (document.readyState !== "loading") {
  us_clickInterception();
} else {
  document.addEventListener("DOMContentLoaded", us_clickInterception);
}

function us_clickInterception() {
  var links = document.querySelectorAll("<a");
  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener("click", function () {
      /* здесь пишем нужное действие */
      alert('Click!');
    });
  });
}
