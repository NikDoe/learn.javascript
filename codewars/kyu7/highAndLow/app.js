function highAndLow(numbers) {
	let min = +Infinity,
		max = -Infinity;
	numbers
		.split(' ')
		.map(n => +n)
		.forEach(n => {
			if (n > max) max = n;
			if (n < min) min = n;
		});
	return `${max} ${min}`;
}

const h = highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'); //42 -9
console.log(h);

//BEST PRACTICE
function highAndLow1(numbers) {
	const arr = numbers.split(' ');
	return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

const h1 = highAndLow1('8 3 -5 42 -1 0 0 -9 4 7 4 -4'); //42 -9
console.log(h1);
