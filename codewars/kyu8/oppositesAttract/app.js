function lovefunc(flower1, flower2) {
	return (flower1 + flower2) % 2 === 1;
}

const v = lovefunc(4, 2); //true
console.log(v);

//BEST PRACTICE
function lovefunc(flower1, flower2) {
	return flower1 % 2 !== flower2 % 2;
}
