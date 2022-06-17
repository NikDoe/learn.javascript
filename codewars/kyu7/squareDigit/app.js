function squareDigits(num) {
	return +num
		.toString()
		.split('')
		.map(n => +(n ** 2))
		.join('');
}

const s = squareDigits(9119);
console.log(s);
