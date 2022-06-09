//challenge 1
function isValidPassword (password, userName) {
	const tooShort = password.length >= 8;
	const hasSpace = password.indexOf(' ') === -1;
	const tooSimilar = password.indexOf(userName) === -1;
	return tooShort && hasSpace && tooSimilar;
}

const pass1 = isValidPassword('qwe3226265qwe', 'nikdoe'); //true
console.log(pass1);
const pass2 = isValidPassword('nikdoe322', 'nikdoe'); //false
console.log(pass2);
const pass3 = isValidPassword('1234567', 'nikdoe');
console.log(pass3);
