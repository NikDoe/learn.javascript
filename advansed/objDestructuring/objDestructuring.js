const obj = {
	name: 'Nik',
	surname: 'Doe',
	age: 29,
	likeAnime: true,
};

const { name, surname } = obj;

//we can overwrite keys
const { name: firstName, surname: lastName } = obj;

//object destructuring + rest operator
const { name: nikName, ...other } = obj;
