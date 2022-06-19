function spongeMeme(sentence) {
	return sentence
		.split('')
		.map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
		.join('');
}

const s = spongeMeme('stop Making spongebob Memes!');
console.log(s);
