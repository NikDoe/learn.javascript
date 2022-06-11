//task 1
const books = [
	{
		title   : 'Good Omens',
		authors : [
			'Terry Pratchett',
			'Neil Gaiman'
		],
		rating  : 4.25,
		genres  : [
			'fiction',
			'fantasy'
		]
	},
	{
		title   : 'Changing My Mind',
		authors : [
			'Zadie Smith'
		],
		rating  : 3.83,
		genres  : [
			'nonfiction',
			'essays'
		]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [
			'Jeff Smith'
		],
		rating  : 4.42,
		genres  : [
			'fiction',
			'graphic novel',
			'fantasy'
		]
	},
	{
		title   : 'American Gods',
		authors : [
			'Neil Gaiman'
		],
		rating  : 4.11,
		genres  : [
			'fiction',
			'fantasy'
		]
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [
			'Amor Towles'
		],
		rating  : 4.36,
		genres  : [
			'fiction',
			'historical fiction'
		]
	},
	{
		title   : 'The Name of the Wind',
		authors : [
			'Patrick Rothfuss'
		],
		rating  : 4.54,
		genres  : [
			'fiction',
			'fantasy'
		]
	},
	{
		title   : 'The Overstory',
		authors : [
			'Richard Powers'
		],
		rating  : 4.19,
		genres  : [
			'fiction',
			'short stories'
		]
	},
	{
		title   : 'A Truly Horrible Book',
		authors : [
			'Xavier Time'
		],
		rating  : 2.18,
		genres  : [
			'fiction',
			'garbage'
		]
	},
	{
		title   : 'The Way of Kings',
		authors : [
			'Brandon Sanderson'
		],
		rating  : 4.65,
		genres  : [
			'fantasy',
			'epic'
		]
	},
	{
		title   : 'Lord of the flies',
		authors : [
			'William Golding'
		],
		rating  : 3.67,
		genres  : [
			'fiction'
		]
	}
];

// To group books by genre:
const groupBooksByGenre = books.reduce((group, book) => {
	const arr = book.genres;
	for (const genre of arr) {
		if (!group[genre]) group[genre] = [];
		group[genre].push(book);
	}
	return group;
}, {});

console.log(groupBooksByGenre);

// To group books by authors:
const groupBooksByAuthors = books.reduce((group, book) => {
	const arr = book.authors;
	for (const author of arr) {
		if (!group[author]) group[author] = [];
		group[author].push(book);
	}
	return group;
}, {});

console.log(groupBooksByAuthors);

//task 2
const camelize = (str) => {
	const newStr = str
		.split('-')
		.map((el, index) => {
			return index === 0 ? el : el[0].toUpperCase() + el.slice(1);
		})
		.join('');
	console.log(newStr);
	// return;
};
