//task 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

//task 3
const newUser = {
	name : 'John'
};

// Работает!
newUser.name = 'Pete';

// Ошибка
// newUser = 123;
