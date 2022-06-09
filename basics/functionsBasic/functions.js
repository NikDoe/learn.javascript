//challenge 1
function isValidPassword (password, userName) {
	const tooShort = password.length >= 8;
	const hasSpace = password.indexOf(' ') === -1;
	const tooSimilar = password.indexOf(userName) === -1;
	return tooShort && hasSpace && tooSimilar;
}

const pass1 = isValidPassword('qwe3226265qwe', 'nikdoe'); //true
console.log(pass1);
const pass2 = isValidPassword('nikdoe322', 'nikdoe'); //false
console.log(pass2);
const pass3 = isValidPassword('1234567', 'nikdoe');
console.log(pass3);

//challenge 2
function avg (arr) {
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}
	return sum / arr.length;
}

const avg1 = avg([
	0,
	50
]); //25
console.log(avg1);
const avg2 = avg([
	75,
	76,
	80,
	95,
	100
]); // 85.2
console.log(avg2);