let str = 'строка'
str.toUpperCase();
console.log(str); //immutable

str = str.toUpperCase() //override
console.log(str);
// or
let newStringName = str.toUpperCase(); //new variable that save this changes
console.log(newStringName);

//indexied
let pie = "pecan pie";
console.log(pie[7]);

let park = "Yellowstone";
const index = park.indexOf('Stone'); //-1, cause no mathes
console.log(index);

console.log("GARBAGE".slice(2).replace("B", "_"));

//tasks from learn.javascript
let myName = "NikDoe";

console.log( `hello ${1}` );

console.log( `hello ${"name"}` );

console.log( `hello ${myName}` );

//parseInt & parseFloat"
console.log(parseInt('21'));
console.log(parseInt('21dollars'));
console.log(parseInt('$21')); // NaN
console.log(parseFloat("21.22"));
console.log(parseFloat("$21.22")); //NaN