const printPlanets = ({ data }) => {
	for (const { name } of data.results) {
		console.log(name);
	}

	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planedasfts/') => {
	return axios.get(url);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.catch(err => {
		console.log('ERROR!!', err);
	});

console.log('response is send');
