const input = document.querySelector('#inputValue');
const list = document.querySelector('#list');

input.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const li = document.createElement('li');
		li.innerText = this.value;
		list.appendChild(li);
		this.value = '';
	}
});
