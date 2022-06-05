let str = 'строка'
str.toUpperCase();
console.log(str); //immutable

str = str.toUpperCase() //override
console.log(str);
// or
let newStringName = str.toUpperCase(); //new variable that save this changes
console.log(newStringName);