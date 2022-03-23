let num = [];
let c = true;

const isHigher = (numbers) => {
	let higher = 0;
	let orderNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > higher) {
			higher = numbers[i];
			orderNumbers.unshift(numbers[i]);
		} else {
			for (let j = 0; j < orderNumbers.length; j++) {
				if (numbers[i] >= orderNumbers[j]) {
					orderNumbers.splice(j, 0, numbers[i]);
					break;
				}
			}
		}
	}
	console.log("Numeros ordenados", orderNumbers);
	return higher;
};

do {
	let ingreso = prompt(
		"Ingrese un número o escriba x para dejar de ingresar números"
	);
	if (ingreso === "x") {
		c = false;
	} else {
		num.push(+ingreso);
	}
} while (c === true);

console.log(isHigher(num));
