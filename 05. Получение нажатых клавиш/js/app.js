'use strict'

// Получение нажатых клавиш в JavaScript

// №1⊗jsPmOEPKG
// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
/* №2⊗jsPmOEPKG
Понажимайте в инпуте различные клавиши и посмотрите, какие у них значения и коды. */
/* let elems = document.querySelector('#elem');
elems.addEventListener('keydown', func);
function func(event){
	console.log('key: '+event.key+', code: '+event.code);
} */


/* №3⊗jsPmOEPKG
Определите, какой код будет у клавиши Enter. */
/* let elems = document.querySelector('#elem');

elems.addEventListener('keydown', function(event){
	console.log(event.key)
}) */

/* №4⊗jsPmOEPKG
Определите, какой код будет у клавиши BackSpace. */
/* let elems = document.querySelector('#elem');

elems.addEventListener('keydown', function(event){
	console.log(event.key); //Backspace
})  */

/* №5⊗jsPmOEPKG
Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. */
/* let elems = document.querySelector('#elem');
let paragraph = document.querySelector('p');

elems.addEventListener('keydown', func);

function func (event){
	if (event.key === 'Enter'){
		let sobite = elems.value
		paragraph.textContent += 'взято из инпута:  '+ sobite
		elems.value = '';
	}
} */

