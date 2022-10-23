'use strict'

// Тип события в объекте Event в JavaScript
/* №1⊗jsPmOEET
В следующем коде в двум событиям привязан один и тот же обработчик:
<button id="elem">text</button>
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
	
}
Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный. */
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if (event.type === 'click'){
		elem.style.backgroundColor = 'green';
	} else if (event.type === 'dblclick') {
		elem.style.backgroundColor = 'red';
	}
}

