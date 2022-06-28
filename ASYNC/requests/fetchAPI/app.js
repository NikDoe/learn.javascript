const checkStatusAndParse = response => {
	if (!response.ok) throw new Error(`${response.status}, page not found`);

	return response.json();
};

const printPlanets = data => {
	data.results.forEach(({ name }) => {
		console.log(name);
	});

	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.catch(err => {
		console.error(err);
	});

console.log('response is send');
