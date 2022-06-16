function byteToSet(byte) {
	return new Set(
		(byte >>> 0)
			.toString(2)
			.padStart(8, '0')
			.split('')
			.map((char, index) => char === '1' && index)
			.filter(el => el !== false),
	);
}

const b = byteToSet(3);
console.log(b);
