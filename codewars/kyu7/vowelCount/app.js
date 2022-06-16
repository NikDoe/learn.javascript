function getCount(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	str.split('').forEach(el => vowels.includes(el) && count++);
	return count;
}

const g = getCount('abracadabra'); //5
console.log(g);
