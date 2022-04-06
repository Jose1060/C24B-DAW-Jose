const axios = require("axios");
// import axios from "axios";

console.log("Hola mundo desde node soy Jose");

let nombre = "Jose ";

console.log(nombre);

const hacerPeticion = async () => {
	try {
		let rpta = await axios.get("https://reqres.in/api/users?page=2");
		console.log(rpta);
	} catch (err) {
		console.log(err);
	}
};

hacerPeticion();
