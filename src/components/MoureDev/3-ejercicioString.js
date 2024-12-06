//! 1. Contatena dos cadenas de texto
let stringNombre = "Mario";
let stringNovia = "Anyela";
let concatenacion = stringNombre + stringNovia;

//! 2. Muestra la longitud de una cadena de texto
console.log(concatenacion.length);

//! 3. Muestra el primer y ultimo caracter de un string
console.log(concatenacion[0]);
console.log(concatenacion[10]);

//! 4. Convierte a mayuscula y a minuscula un string
console.log(stringNombre.toUpperCase());
console.log(stringNovia.toLowerCase());

//! 5. Crea una cadena de texto en varias lineas
let cadenaVariasLineas = `Texto en
                          Varias
                          Lineas`;

//! 6. Interpola el valor de una variable en un string
let interporlaString = `Hola ${stringNombre} tu novia se llama ${stringNovia}`;

//! 7. Rempaza todos los espacion en blanco de un string por guiones
console.log(interporlaString.replaceAll(" ", "-"));

//! 8. Comprueba si una cadena de texto contiene una palabra de texto concreta
console.log(interporlaString.includes("Mario"));
console.log(interporlaString.includes("Mao"));
console.log(interporlaString.includes("Anyela"));

//! 9. Comprueba si dos strings son iguales
console.log(stringNombre == stringNombre);
console.log(stringNombre == stringNovia);

//! 10. Comprueba si dos string tienen la misma longitud
console.log(stringNombre.length == stringNombre.length);
console.log(stringNombre.length == stringNovia.length);
