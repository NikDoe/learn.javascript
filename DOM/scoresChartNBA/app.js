const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true,
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false,
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true,
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false,
		},
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false,
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true,
		},
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false,
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true,
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true,
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false,
		},
	},
];

const ul = document.createElement('ul');
ul.classList.add('score');
document.body.insertAdjacentElement('afterbegin', ul);

warriorsGames.forEach(game => {
	const li = document.createElement('li');
	const { awayTeam, homeTeam } = game;
	const { team: aTeam, points: aPoints } = awayTeam;
	const { team: hTeam, points: hPoints } = homeTeam;
	const teams = `${aTeam} @ ${hTeam}`;
	const score = `${
		aPoints > hPoints
			? `<b>${aPoints}</b>-${hPoints}`
			: `${aPoints}-<b>${hPoints}</b>`
	}`;
	li.innerHTML = `${teams} ${score}`;
	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
	li.classList.add(warriors.isWinner ? 'green' : 'red');
	ul.append(li);
});
