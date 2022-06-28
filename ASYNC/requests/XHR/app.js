const request = new XMLHttpRequest();
request.open('GET', 'https://swapi.dev/api/planets/');
request.send();

request.addEventListener('load', function () {
	const data = JSON.parse(request.response);
	const { results } = data;
	results.forEach(({ name }) => {
		console.log(name);
	});
});

request.addEventListener('error', function () {});

console.log('response is send');
