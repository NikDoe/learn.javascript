fetch('https://swapi.dev/api/planets/')
	.then(response => {
		if (!response.ok) throw new Error(`${response.status}, page not found`);

		return response.json();
	})
	.then(data => {
		const filmURL = data.results[0].films[0];
		return fetch(filmURL);
	})
	.then(response => {
		if (!response.ok) throw new Error(`${response.status}, page not found`);

		return response.json();
	})
	.then(data => {
		console.log(data.title);
	})
	.catch(err => {
		console.error(err);
	});

console.log('response is send');
