//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = url => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' },
				],
				'/about': 'This is the about page!',
			};
			const data = pages[url];
			const err = `${url} is wrong URL`;
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			} else {
				reject({ status: 404, err }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then(res => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch(res => {
		console.log(res.status);
		console.log('error message', res.err);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then(res => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch(res => {
		console.log('Status Code', res.status);
		console.log('error message:', res.err);
		console.log('REQUEST FAILED');
	});
