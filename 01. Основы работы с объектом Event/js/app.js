'use strict'

// Основы работы с объектом Event
/* №1⊗jsPmOEInr
Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта. */
let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event){
	console.log(event);
})