//task 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

//task 2
let schedule = {};

function isEmpty (obj) {
	let str = '';
	for (const key in obj) {
		str += key;
	}
	return !str;
}

//variant 2
function isEmptyObject (data) {
	return Object.keys(data).length === 0;
}

console.log(isEmpty(schedule));
console.log(isEmptyObject(schedule));

//task 3
const newUser = {
	name : 'John'
};

// Работает!
newUser.name = 'Pete';

// Ошибка
// newUser = 123;

//task 4
let salaries = {};

function sumSalaries (obj) {
	let sum = 0;
	for (const key in obj) {
		sum += obj[key];
	}
	return sum;
}

console.log(sumSalaries(salaries));

//task 5
let menu = {
	width  : 200,
	height : 300,
	title  : 'My menu'
};

function multiplyNumeric (obj) {
	for (const key in obj) {
		typeof obj[key] === 'number' && (obj[key] *= 2);
	}
}

multiplyNumeric(menu);
console.log(menu);
