//! 1. Crea un objeto con 3 propiedades
const object = {
  nombre: "Mario",
  apellido: "Santacruz",
  estudio: "Ingeniero",
};

//! 2. Accede y muestra su valor
for (key in object) {
  // console.log(object[key]);
}

//! 3. Agrega una nueva propiedad
object.edad = 32;
// console.log(object);

// 4. Elimina una de las 3 primeras propiedades
delete object.estudio;
// console.log(object);

//! 5. Agrega una función e invócala
object.desc = function () {
  return `Hola! su nombre es ${this.nombre} y su apellido es ${this.apellido} con una edad de ${this.edad} años`;
};
// console.log(object.desc());

//! 6. Itera las propiedades del objeto
// console.log(Object.keys(object));

//! 7. Crea un objeto anidado
object.propiedades = {
  colorPelo: "Negro",
  colorPiel: "Blanca",
  estatura: 179,
  tipoSangre: "desconocida",
};

//! 8. Accede y muestra el valor de las propiedades anidadas
let mostrarPropiedades = Object.entries(object.propiedades);
console.log(mostrarPropiedades);

//! 9. Comprueba si los dos objetos creados son iguales

//! 10. Comprueba si dos propiedades diferentes son iguales
