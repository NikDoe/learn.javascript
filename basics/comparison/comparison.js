console.log(5 > 4); //true
console.log("а" > "я"); //false по юникоду "а" меньше "я"
console.log("2" > "12"); //true "2" меньше "1"
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false null равень только undefined при нестрогом
console.log(null === +"\n0\n"); //false разные типы