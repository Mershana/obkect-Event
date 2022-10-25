'use strict'

// Прекращение всплытия событий в JavaScript
/* №1⊗jsPmOESEB
Самостоятельно реализуйте корректную работу описанной задачи. */

let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

/* button.addEventListener('click', function(event) {
	block.classList.add('active');
	event.stopPropagation();
});

parent.addEventListener('click', function(event) {
	block.classList.remove('active');
}); */