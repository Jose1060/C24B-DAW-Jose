const sevenMultipler = () => {
	let result = [];
	let x = true;
	let n = 0;
	do {
		n = n + 1;
		if (n % 7 === 0 && n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) {
			result.push(n);
		}

		if (result.length === 50) {
			x = false;
		}
	} while (x === true);
	return result;
};

console.log(sevenMultipler());
