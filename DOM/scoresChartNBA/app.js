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

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const generateChart = (games, teamName) => {
	const ul = document.createElement('ul');

	games.forEach(game => {
		const li = document.createElement('li');
		li.innerHTML = getScoreLine(game);
		li.classList.add(winner(game, teamName));
		ul.appendChild(li);
	});

	return document.body.insertAdjacentElement('afterbegin', ul);
};

const getScoreLine = game => {
	const { awayTeam, homeTeam } = game;
	const { team: aTeam, points: aPoints } = awayTeam;
	const { team: hTeam, points: hPoints } = homeTeam;
	const teams = `${aTeam} @ ${hTeam}`;
	const score = `${
		aPoints > hPoints
			? `<b>${aPoints}</b>-${hPoints}`
			: `${aPoints}-<b>${hPoints}</b>`
	}`;
	return `${teams} ${score}`;
};

const winner = ({ homeTeam, awayTeam }, target) => {
	const team = homeTeam.team === target ? homeTeam : awayTeam;
	return team.isWinner ? 'green' : 'red';
};

const chart1 = generateChart(warriorsGames, 'Golden State');
const chart2 = generateChart(warriorsGames, 'Houston');

gsSection.appendChild(chart1);
hrSection.appendChild(chart2);
