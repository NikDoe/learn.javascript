function squareSum(numbers) {
	return numbers.reduce((a, c) => a + c ** 2, 0);
}

const n = squareSum([0, 3, 4, 5]); //50
console.log(n);
