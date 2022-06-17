function eachCons(array, n) {
	let res = [];

	for (let i = 0; i <= array.length - n; i++) {
		res.push(array.slice(i, i + n));
	}

	return res;
}

const e = eachCons([1, 2, 3], 2);
console.log(e);
