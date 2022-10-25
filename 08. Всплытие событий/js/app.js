"use strict";

// Всплытие событий в JavaScript
/* №1⊗jsPmOEEB
Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий. */

/* let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

elem1.addEventListener("mousemove", function () {
  console.log("оранжевый");
});
elem2.addEventListener("mousemove", function () {
  console.log("желтый");
});
elem3.addEventListener("mousemove", function () {
  console.log("фиолетовый");
});
 */

/* №2⊗jsPmOEEB
Всплывать могут не все события. Экспериментально найдите хотя бы одно событие, которое не будет всплывать. */
let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");

elem1.addEventListener("blur", function () {
  console.log("оранжевый");
});
elem2.addEventListener("blur", function () {
  console.log("желтый");
});
elem3.addEventListener("blur", function () {
  console.log("фиолетовый");   
});