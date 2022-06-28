fetch('https://swapi.dev/api/planets/')
	.then(response => {
		if (!response.ok) {
			throw new Error(`${response.status}`);
		} else {
			response.json().then(data => {
				const { results } = data;
				results.forEach(({ name }) => {
					console.log(name);
				});
			});
		}
	})
	.catch(err => {
		console.error(err);
	});

console.log('response is send');
