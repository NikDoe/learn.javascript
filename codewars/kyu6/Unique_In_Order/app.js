const sunday = [11, 11];
const monday = [22, 22];
const tuesday = [33, 33];
const wednesday = [44, 44];
const thursday = [55, 55];
const friday = [66, 66];
const saturday = [77, 77];
const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

function stairsIn20(s) {
	let totalDay = 0;
	s.forEach(day => {
		const t = day.reduce((acc, curr) => {
			return acc + curr;
		});
		totalDay += t;
	});
	return totalDay * 20;
}

stairsIn20(stairs);

//BEST PRACTISES
function stairsIn22(a) {
	return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
