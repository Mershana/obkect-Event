'use strict'

// Отмена действия по умолчанию в 
/* №1⊗jsPmOECDA
Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило. */
/* let elems = document.querySelectorAll('a');

for (let elem of elems){
	elem.addEventListener('click', function(event){
		elem.textContent += elem.href;
		event.preventDefault();
	})
}
 */

/* №2⊗jsPmOECDA
Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел. */

let elems = document.querySelectorAll('input');
let paragraph = document.querySelector('p');
let link = document.querySelector('a');

link.addEventListener('click', function(event){
	for (let elem of elems){
		(paragraph.textContent = (+elem.value + +elem.value));
		event.preventDefault();
	}
});