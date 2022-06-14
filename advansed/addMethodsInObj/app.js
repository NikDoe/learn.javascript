// Adding methods to an object!
const math = {
	numbers: [1, 2, 3, 4, 5],
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	},
};

// To execute multiply:
math.multiply(5, 9); //45
const sum = math.add(11, 30); //41
console.log(sum);
