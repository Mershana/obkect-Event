'use strict'

// Делегирование событий в JavaScript
/* №1⊗jsPmOEED
Повторите приведенное решение. Убедитесь, что новые li также будут реагировать на клик. */
/* 
let button = document.querySelector('button');
let list = document.querySelector('ul');
let items = list.querySelectorAll('li'); */


/* for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
	
	item.addEventListener('click', handler);
	
	list.appendChild(item);
});


function handler() {
	this.innerHTML = this.innerHTML + '!';
} */

// Универсальное делегирование событий
/* №2⊗jsPmOEED
Повторите приведенное решение. */
/* В этом случае нажатие на тег i приведет к добавлению восклицательного знака в конец тега i, а не тега li, как мы хотели бы - ведь в event.target попадает именно тот тег, в котором случилось событие.

Решить проблему можно с помощью метода closest: */

/* let list  = document.querySelector('ul');
let items = list.querySelectorAll('li'); 

list.addEventListener('click', function(event) {
	let li = event.target.closest('li');
	
	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
});
 */