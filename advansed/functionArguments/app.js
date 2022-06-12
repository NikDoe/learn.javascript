//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum() {
	//It is NOT an array, we have to turn it into one if we want to use array methods
	const argsArr = [...arguments];
	return argsArr.reduce((total, currVal) => {
		return total + currVal;
	});
}

const arrayOfNums = [1, 3, 5, 6, 99, 100];
console.log(sum(...arrayOfNums));

// No arguments object inside of arrow functions :(
const multiply = () => {
	console.log(arguments);
};
