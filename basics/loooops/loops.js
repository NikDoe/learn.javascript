//task 1
let i = 0;
while (++i < 5) console.log(i); // 1,2,3,4 - так как сначало срабатывает шаг а потом проверка условия

let j = 0;
while (j++ < 5) console.log(j); // 1,2,3,4,5 - постфиксная форма всегда возвращает старое значение

//task 2
//цикл for всегда сначало выводит "начало", потом проверка условия, выполнения тела цикла, и только потом шаг ++
for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);

//task 3
for (let index = 2; index <= 10; index++) {
	if (index % 2 == 1) continue;

	console.log(index);
}

//task 4
let num = 0;
while (num < 3) {
	console.log(`number ${num}!`);
	num++;
}

//task 5
while (true) {
	let userNumber = +prompt('Введите число не больше 100', '');

	if (userNumber > 100 || !userNumber) break;

	console.log(`Вы ввели ${userNumber}`);
}

console.log('Вы проиграли вы ввели число больше 100 или ничего не ввели');

//variant #2
let n;

do {
	n = prompt('Введите число больше 100?', 0);
	console.log(`Вы ввели число ${n}`);
} while (n <= 100 && n);

//task 6
let startNumber = +prompt('Введите начально значение', 2);
let endNumber = +prompt('Введите конечное значение', 2);

if (startNumber && endNumber && startNumber > 1 && endNumber > 1) {
	nextPrime: for (let i = 2; i <= endNumber; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}

		console.log(i);
	}
} else {
	console.log('неверное начальное значение или конечное');
}
