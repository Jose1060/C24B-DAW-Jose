// Language: javascript
//Calcular la comisión sobre las ventas totales de un empleado, sabiendo que el empleado
//no recibe comisión si su venta es hasta S/.150, si la venta es superior a S/.150 y menor
//o igual a S/.400 el empleado recibe una comisión del 10% de las ventas y si las ventas
//son mayores a 400, entonces la comisión es de S/.50 más el 9% de las ventas.

console.log("Ejercicio 3");

const comission = (sales) => {
	if (sales <= 150) {
		return 0;
	} else if (sales > 150 && sales <= 400) {
		return sales * 0.1;
	} else {
		return sales * 0.09 + 50;
	}
};

let sale = parseInt(prompt("Ingrese el valor de venta"));
console.log("Total de paga", comission(sale) + sale);
