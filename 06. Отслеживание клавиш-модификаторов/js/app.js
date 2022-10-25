'use strict'

// Отслеживание клавиш-модификаторов в JavaScript
// №1⊗jsPmOEKM
// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
/* let elems = document.querySelector('#elem');

elems.addEventListener('click', function(event){
	if (event.altKey){
		elems.style.border = '3px solid red';
	}
}); */

/* №2⊗jsPmOEKM
Пусть у вас есть список ul с тегами li:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift. */
/* let elems = document.querySelectorAll('li');

for (let elem of elems){
	elem.addEventListener('click', function(event){
		if(event.ctrlKey){
			elem.textContent += 1;
		} else if (event.shiftKey){
			elem.textContent += 2;
		}
	})
} */
