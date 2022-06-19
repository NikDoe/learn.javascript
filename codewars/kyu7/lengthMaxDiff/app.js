function mxdiflg(a1, a2) {
	let maxA1 = -Infinity,
		maxA2 = -Infinity,
		minA1 = +Infinity,
		minA2 = +Infinity;
	a1.forEach(el => {
		if (el.length > maxA1) maxA1 = el.length;
		if (el.length < minA1) minA1 = el.length;
	});

	a2.forEach(el => {
		if (el.length > maxA2) maxA2 = el.length;
		if (el.length < minA2) minA2 = el.length;
	});
	return a1.length !== 0 && a2.length !== 0
		? Math.max(Math.abs(maxA2 - minA1), Math.abs(maxA1 - minA2))
		: -1;
}

const s1 = [
	'hoqq',
	'bbllkw',
	'oox',
	'ejjuyyy',
	'plmiis',
	'xxxzgpsssa',
	'xxwwkktt',
	'znnnnfqknaz',
	'qqquuhii',
	'dvvvwz',
];
const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

//BEST PRACTICE 1
function mxdiflg1(a1, a2) {
	if (a1.length === 0 || a2.length === 0) return -1;
	let l1 = a1.map(str => str.length);
	let l2 = a2.map(str => str.length);
	return Math.max(
		Math.max(...l1) - Math.min(...l2),
		Math.max(...l2) - Math.min(...l1),
	);
}

//BEST PRACTICE REDUCE

function mxdiflg2(a1, a2) {
	return a1.reduce(
		(acc1, curr1) =>
			Math.max(
				acc1,
				a2.reduce(
					(acc2, curr2) =>
						Math.max(acc2, Math.abs(curr1.length - curr2.length)),
					-1,
				),
			),
		-1,
	);
}

const m = mxdiflg2(s1, s2);
console.log(m);
