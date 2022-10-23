"use strict";

// Элемент события в объекте Event в JavaScript
/* Объект Event также позволяет получить элемент, в котором произошло событие. Этот элемент содержится в свойстве target. Зачем это нужно, если этот элемент содержится в this?
Дело в том, что на самом деле this всегда содержит элемент, к которому было привязано событие, а свойство target - элемент, по которому реально был клик. Этот реальный элемент может совпадать с this, а может не совпадать. */

/* №1⊗jsPmOEEE
Пусть у вас есть список ul с тегами li:

ul {
	padding: 30px;
	border: 1px solid red;
}
li {
	list-style-type: none;
	margin-bottom: 20px;
	border: 1px dashed black;
}
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul> */

// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

let elems = document.querySelector("#elem");
elems.addEventListener("click", func);

function func(event) {
   let elemsTarget = event.target.tagName.toLowerCase();
	console.log(elemsTarget)
  
  if (elemsTarget === 'ul') {
    let newElems = document.createElement('li');
    newElems.innerHTML = 'text';
    elems.appendChild(newElems);
  }

  if (elemsTarget === "li") {
    event.target.textContent += "!";
  }
}

/* let ul = document.querySelector("ul");
let elems = document.querySelector("li");
document.body.addEventListener("click", func);
function func(e) {
  console.log("work");
  let t = e.target;
  if (t.tagName === "UL") {
    let li = document.createElement("li");
    li.textContent = "text";
    t.append(li);
  }
  if (t.tagName === "LI") {
    t.textContent += "!";
  }
} */
