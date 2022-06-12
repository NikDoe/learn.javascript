const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya',
	},
	{
		first: 'Feyisa',
		last: 'Lilesa',
		country: 'Ethiopia',
	},
	{
		first: 'Galen',
		last: 'Rupp',
		country: 'United States',
	},
];

//BAD WAY OF NESTED DESTRUCTURING
const [, { country }] = results;

//GOOD WAY
const [, silverMedal] = results;
const { last: surname } = silverMedal;
