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

//chalenge 3
function isPangram (str) {
	let lowerCased = str.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) return false;
	}
	return true;
}

const pangram1 = isPangram('Mr Jock, TV quiz PhD, bags few lynx');
const pangram2 = isPangram('Mr Jock, TV quiz PhD, bags few lyn');
console.log(pangram1, pangram2);

//challenge 4
function getRandomCard (arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function getCard () {
	const values = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];

	const suits = [
		'clubs',
		'spades',
		'hearts',
		'diamonds'
	];

	return {
		value : getRandomCard(values),
		suit  : getRandomCard(suits)
	};
}

const card = getCard();
console.log(card);

//task 1
function pow (x, n) {
	let total = 1;
	for (let i = 0; i < n; i++) {
		total *= x;
	}
	return total;
}

const x = +prompt('Введите число', '');
const n = +prompt('Введите степень в которую хотите возвести число', '');

function printMessage () {
	const userEscapeX = x !== 0;
	const userEscapeN = n !== 0;
	const isNatural = x > 1;

	const output =

			userEscapeX && userEscapeN && isNatural ? pow(x, n) :
			'Введите валидные значения';

	return output;
}

console.log(printMessage());
