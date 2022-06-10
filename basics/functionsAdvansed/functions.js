//task 1
function truncate (str, maxlength) {
	return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);

//task 2
function extractCurrencyValue (str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (!isNaN(str[i])) {
			newStr += str[i];
		}
	}
	return +newStr;
}

console.log(extractCurrencyValue('$$$$$$$$$$120$') === 120); //true

//task 3
function sumInput () {
	const arr = [];
	let sum = 0;

	while (true) {
		const el = prompt('Введите число!');
		if (el === '' || el === null || isNaN(el)) break;

		arr.push(+el);
	}

	for (const iterator of arr) {
		sum += iterator;
	}

	return sum;
}

console.log(sumInput());
