const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay) => {
	return new Promise((response, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				response();
			}
		}, delay);
	});
};

const animateRight = async function (el, a) {
	try {
		await moveX(el, a, 1000);
		await moveX(el, a, 1000);
		await moveX(el, a, 1000);
		await moveX(el, a, 1000);
	} catch ({ bodyBoundary, elRight, amount }) {
		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
		console.log(
			`Element is at ${elRight}px, amount of ${amount}px is too large!`,
		);

		await animateRight(el, -a);
	}
};

animateRight(btn, 300);
