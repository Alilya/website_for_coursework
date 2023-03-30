"use strict";
document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.elements;
 
  alert(inputs.age.value);
  alert(inputs.phone.value);
});
