//task 1
if ("0") { // не пустая строка, поэтому true
    console.log('Привет');
}

//task 2
let nameOfJavaScript = prompt('Какое "официальное" название JavaScript?', '');

if (nameOfJavaScript === 'ECMAScript') {
    console.log("Верно!");
}
else {
    console.log('Не знаете?', 'ECMAScript');
}

//task 3
let userNumber = +prompt('Введите число', '');

if (userNumber === 0) {
    console.log('0');
}
else if (userNumber < 0) {
    console.log('-1');
}
else if (userNumber >= 1) {
    console.log('1');
}
else {
    console.log('Вы ввели не число');
}

//task 4
result = (a + b < 4) ? 'Мало' : 'Много';

//task 5
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';