function disemvowel(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return str
		.split('')
		.filter(char => !vowels.includes(char.toLowerCase()))
		.join('');
}

const d = disemvowel('This website is for losers LOL!');
console.log(d);
