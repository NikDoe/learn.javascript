const rainbowColors = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Blue',
	'Indigo',
	'Violet',
];

//instead of dying these
// const red = rainbowColors[0]
// const orange = rainbowColors[1]
// const yellow = rainbowColors[3]

//we can use arraysDestructuring
const [red, orange, yellow] = rainbowColors;

//skip some elements
const [red1, , , green, blue] = rainbowColors;

//arraysDestructuring + rest operator
const [red2, orange2, ...otherColors] = rainbowColors;
