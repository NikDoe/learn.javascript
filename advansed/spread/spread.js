//spread in functions call
function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

giveMeFour(...colors);

//arrays literals
const arrayOfNums = [1, 2, 3, 4, 5];
const arrayOfStrings = ['red', 'green'];

const newArrOfEverything = [
	...'abc',
	...arrayOfNums,
	null,
	undefined,
	...arrayOfStrings,
	1,
	2,
	3,
	'HELLO',
];
console.log(newArrOfEverything);
