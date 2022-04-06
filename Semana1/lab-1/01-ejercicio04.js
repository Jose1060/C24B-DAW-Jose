// Language: javascript
//Abra el arreglo peliculas.js:
//https://drive.google.com/file/d/1RZsCpXzBOEUbQqSFtrGe31yzM_A4J-
//gg/view?usp=sharing , este archivo tiene un arreglo de películas en forma de objetos,
//copie el arreglo a un archivo propio de JS, recorra el arreglo y retorne en una función
//solo las películas en idioma inglés (“en”).

import { peliculas } from "./peliculas.js";

console.log("Ejercicio 4");

const filmEN = (pel) => {
	let i = 0;
	return pel.map(function (obj) {
		if (obj.original_language === "en") {
			i++;
			console.log(
				i,
				"Titulo: " +
					obj.title +
					" | Año: " +
					obj.release_date +
					"| Idiom: " +
					obj.original_language
			);
			return obj;
		}
	});
};

console.log("Peliculas en ingles", filmEN(peliculas));
