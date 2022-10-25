"use strict";

// Получение целевого элемента при всплытии событий
/* №1⊗jsPmOEBTE

Даны следующие элементы:

<div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</div>
div, ul, li {
	padding: 20px;
}

div {
	border: 1px solid red;
}
ul {
	border: 1px solid orange;
}
li {
	border: 1px solid green;
}
Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие. */
/* let elems = document.querySelector('div');

elems.addEventListener('click', function(event){
	if (event.target.matches('div')){
		console.log('клик по div');
	}
	if (event.target.matches('ul')){
		console.log('клик по ul');
	}
	if (event.target.matches('li')){
		console.log('клик по li');
	}
}); */

/* №2⊗jsPmOEBTE
Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul - ей в конец добавлялась новая li. */
/* let elems = document.querySelector('div');

elems.addEventListener('click', function(event){
	if (event.target.matches('div')){
		console.log('клик по div');
	}
	if (event.target.matches('ul')){
		let newElems = document.createElement('li');
		newElems.innerHTML = 'new li';
		elems.appendChild(newElems)
	}
	if (event.target.matches('li')){
		event.target.textContent += '!';
	}
});  */