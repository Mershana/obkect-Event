'use strict'

// Навешивание обработчиков на новые элементы в JavaScript

let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

// Сделаем так, чтобы по клику на любую li ей в конец добавлялся восклицательный знак:

/* for (let item of items) {
	item.addEventListener('click', function() {
		this.innerHTML = this.innerHTML + '!';
	});
} */

// Давайте теперь сделаем так, чтобы по нажатию на кнопку в конец списка добавлялся новая li:

/* button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	list.appendChild(item);
});
 */
/* Мы, однако, получим проблему: клик на новую добавленную li не будет приводить к добавлению восклицательного знака в конец. Дело в том, что мы добавляем обработчик клика только на те li, которые существовали изначально, но не на новые. */
// Исправим проблему, навесив на новую li обработчик клика:
/* button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	
	item.addEventListener('click', function() { // обработчик клика
		this.innerHTML = this.innerHTML + '!';
	});
	
	list.appendChild(item);
}); */

/* Однако, теперь код функции-обработчика дублируется в двух местах - для изначально существующих li и для новых. Исправим это, вынеся его в отдельную функцию: */

function handler() {
	this.innerHTML = this.innerHTML + '!';
}

// Используем нашу функцию, чтобы избежать дублирования кода:

for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	
	item.addEventListener('click', handler);
	
	list.appendChild(item);
});

/* Задача в общем-то решена и мы избежали дублирования кода функции-обработчика. Однако, навешивать обработчики событий нам все равно приходится в двух местах: и в цикле для существующих li, и в при клике на кнопку. В следующем уроке мы разберем способ избавится от этого неудобства. */