const isSquare = function (n) {
	return Math.sqrt(n) % 1 === 0;
};

const i = isSquare(25);
console.log(i);
