function powersOfTwo(n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(2 ** i);
	}
	return arr;
}
const output = powersOfTwo(2);
console.log(output);

//BEST PRACTICE
function powersOfTwo1(n) {
	var result = [];
	for (var i = 0; i <= n; i++) {
		result.push(Math.pow(2, i));
	}
	return result;
}
