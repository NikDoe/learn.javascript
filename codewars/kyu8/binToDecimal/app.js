function binToDec(bin) {
	return bin
		.split('')
		.reverse()
		.reduce((acc, curr, index) => {
			if (curr === '1') acc += 2 ** index;
			return acc;
		}, 0);
}

const b = binToDec('111100110'); //486
console.log(b);

//BEST PRACTICE
function binToDec1(bin) {
	return parseInt(bin, 2);
}
