//! 1. Usa desestructuración para extraer los dos primeros elementos de un array
let array = ["mao", "anyi"];
let [nom, nom2] = array;

//! 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
array = [1, 2];
let [num1, num2, num3 = 3] = array;

//! 3. Usa desestructuración para extraer dos propiedades de un objeto
let object = {
  nombre: "mao",
  apellido: "machado",
};

let { nombre: nombre1, apellido: apellido1 } = object;
// console.log(nombre1, apellido1);

//! 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
// let { nombre: name1, apellido: lastname } = object;
// console.log(name1);
// console.log(lastname);

//! 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
object.properties = {
  colorPelo: "Negro",
  colorOjos: "Cafes",
};

let {
  nombre,
  apellido,
  properties: { colorPelo, colorOjos },
} = object;

// console.log(colorPelo);
// console.log(colorOjos);

//! 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6];
let propargacion = [...array1, ...array2];

//! 7. Usa propagación para crear una copia de un array
let copia = [...array1];
// console.log(copia);

//! 8. Usa propagación para combinar dos objetos en uno nuevo
let persona = {
  nombre: "Anyi",
  apellido: "Cabrera",
};

let combinar = { ...persona, ...object };
// console.log(combinar);

//! 9. Usa propagación para crear una copia de un objeto
let copiaObjeto = { ...persona };
// console.log(copiaObjeto);

//! 10. Combina desestructuración y propagación
let [numero1, numero2, numero3, ...restoArray] = array1;
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(array2);
