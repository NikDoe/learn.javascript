//spread in functions call
function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

giveMeFour(...colors);
