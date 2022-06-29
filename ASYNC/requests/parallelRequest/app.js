async function getPokemon() {
	const p1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
	const p2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
	const p3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');
	const results = await Promise.all([p1, p2, p3]);
	printPokemon(results);
}

function printPokemon(arr) {
	arr.forEach(({ data }) => {
		console.log(data.name);
	});
}

getPokemon();
