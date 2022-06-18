function descendingOrder(n) {
	return +n
		.toString()
		.split('')
		.sort((a, b) => b - a)
		.join('');
}

const d = descendingOrder(123456789); //987654321
console.log(d);
