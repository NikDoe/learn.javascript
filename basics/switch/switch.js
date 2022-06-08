//task 1
const browser = 'Edge';

if (browser == 'Edge') {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

//task 2
const number = +prompt('Введите число между 0 и 3', '')

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        console.log('Вы ничего не ввели');
        break;
}