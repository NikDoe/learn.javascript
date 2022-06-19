const ul = document.createElement('ul');

while (true) {
	const l = prompt('Введите сообщение');
	if (!l) break;
	const li = document.createElement('li');
	li.textContent = l;
	ul.appendChild(li);
}

document.body.insertAdjacentElement('afterbegin', ul);
