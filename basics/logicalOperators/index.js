//task 1
console.log(null || 2 || undefined); //2

//task 2
console.log(null || 2 && 3 || 4); //3

//task 3
let age = 30;

if (age >= 14 && age <= 90) {
    console.log(`Возраст ${age} подходит`);
}

//task 4
let newAge = 10;
if (!(newAge >= 14 && newAge <= 90)) {
    console.log(`Возраст ${newAge} не подходит`);
}

if (newAge < 14 || newAge > 90) {
    console.log(`Возраст ${newAge} также не подходит`);
}

//task 5
let user = prompt('Кто там?', '');

if (user === "Админ") {

    let password = prompt('введите пароль', '');

    if (password === 'Я Главный') {
        console.log(`Здравствуйте ${user}`);
    }
    else if (!password) {
        console.log('Отменено');
    }
    else {
        console.log(`Пароль неверный`);
    }

}
else if (!user) {
    console.log('Отмена');
}
else {
    console.log(`Я вас не знаю ${user}`);
}