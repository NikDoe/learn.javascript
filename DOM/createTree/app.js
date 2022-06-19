let data = {
	Рыбы: {
		форель: {},
		лосось: {},
	},

	Деревья: {
		Огромные: {
			секвойя: {},
			дуб: {},
		},
		Цветковые: {
			яблоня: {},
			магнолия: {},
		},
	},
};

const container = document.createElement('div');
container.id = 'container';

function createTree(container, data) {
	if (!Object.keys(data).length) return;
	const ul = document.createElement('ul');
	for (const key in data) {
		const li = document.createElement('li');
		li.innerText = key;
		createTree(li, data[key]);
		ul.appendChild(li);
	}
	return container.appendChild(ul);
}

document.body.insertAdjacentElement('afterbegin', container);
createTree(container, data);
