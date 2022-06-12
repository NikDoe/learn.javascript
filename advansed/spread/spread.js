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

//spread in objects literals
const feline = {
	legs: 4,
	family: 'Felidae',
};

const canine = {
	family: 'Caninae',
	furry: true,
	legs: 4,
};

const dog = {
	...canine,
	isPet: true,
	adorable: true,
};

console.log(dog); //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const catDog = {
	...canine,
	...feline,
};

console.log(catDog); //{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
	...canine,
	legs: 3,
};

//spread object in array
// const errorObjectSpreadInArray = [...'hello', ...catDog]; //error, objects is not iterable
const correctObjectSpreadInArray = [...'hello', { ...catDog }];

//spread array in object
const spreadArrayInObject = { ...['red', 'green', 'yellow'] };
console.log(spreadArrayInObject); //{0: 'red', 1: 'green', 2: 'yellow'}
