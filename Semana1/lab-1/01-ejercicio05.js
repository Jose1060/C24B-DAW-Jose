// Language: javascript
//Cree una función que reciba un número entero J y un arreglo de enteros, la función debe
//retornar el arreglo con los enteros desplazados hacia la izquierda según el entero J. Ej.
//J  =  2  y  el  arreglo  original  es  igual  a  [1,2,3,4,5]  el  resultado  debe  ser  [3,4,5,1,2],  NOTA.
//Investigue el método Shift() de Javascript para obtener el resultado.

console.log("Ejercicio 5");

const moverPosiciones = (x, arreglo) => {
	console.log(arreglo);
	let nuevoArreglo = [];
	for (let i = 0; i < arreglo.length; i++) {
		if (i + x < arreglo.length) {
			nuevoArreglo.push(arreglo[i + x]);
		} else {
			nuevoArreglo.push(arreglo[i + x - arreglo.length]);
		}
	}
	return nuevoArreglo;
};

const moverPosiciones2 = (x, arreglo) => {
	console.log(arreglo);
	let nuevoArreglo = [];
	nuevoArreglo.length = arreglo.length;
	console.log(nuevoArreglo);
	for (let i = 0; i < arreglo.length; i++) {
		let n = arreglo.shift();
        nuevoArreglo[]
	}
};

let j = +prompt("Ingrese el desplazamiento");
/**
 * Hacer que el usuario ingrese numeros y tener en un arreglo
 */
let continuar = true;
let arrNum = [];
do {
	let ingreso = prompt(
		"Ingrese un número o escriba x para dejar de ingresar números"
	);
	if (ingreso === "x") {
		continuar = false;
	} else {
		arrNum.push(+ingreso);
	}
} while (continuar === true);
//console.log(moverPosiciones(j, arrNum));
console.log(moverPosiciones2(j, arrNum));