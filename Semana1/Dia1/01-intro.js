// usar var no es recomendable
var a = "Jose";

// usar let, es identico a var pero mas seguro

let b = "Mamani";

//const, variable que no permite su modificacion

const c = 3.1416;

//---------------------------

let edad = 31;

console.log(edad);

edad = "treinta y uno";

console.log(typeof edad);

// Arreglos

let nombresA = ["Klebert", "Jose", "Gabriel"];

//Push
nombresA.push("Pedro");
console.log(nombresA);

//Pop
nombresA.pop();
console.log(nombresA);

//---------------------------

//Objetos

let persona = {
	nombre: "Pedro",
	apellido: "Caseres",
	edad: 31,
	hobbies: ["Correr", "Dormir", "Comer"],
};

console.log(persona.hobbies);

//---------------------------

//Funciones

function sumar(x, y) {
	return x + y;
}

//Arrow function

const restar = (x, y) => {
	return x - y;
};

let mascota = {
	nombre: "Firulais",
	ladrar: function () {
		console.log(this);
	},
	comer: () => {
		console.log(this);
	},
};

let saludar = () => "Hola mundo";

let texto = (text = "ok") => text;
console.log(saludar());
console.log(texto());

//estructura condicional

let lesquiere = false;

if (lesquiere) {
	console.log("Si les quiere");
} else {
	console.log("No les quiere");
}

console.log(lesquiere ? "Si les quiere" : "No les quiere");
