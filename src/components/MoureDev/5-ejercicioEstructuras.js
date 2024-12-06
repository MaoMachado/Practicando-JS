//! => 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "caballo", "ardilla", "pez"];

//! => 2. Añade dos mas. Uno al principio y otro al final
animales.unshift("loro");
animales.push("raton");

//! => 3. Elimina el que se encuentra en tercera posicion
animales.splice(2, 1);

//! => 4. Crea un set que almacene cinco libros
let libros = new Set(["Libro1", "libro2", "libro3", "libro4", "libro5"]);

//! => 5. Añade dos mas. Uno de ellos repetidos
libros.add("libro6");
libros.add("Libro6");

//! => 6. Elimina uno concreto a tu eleccion
libros.delete("libro3");

//! => 7. Crea un map que asocie el número del mes a su nombre
let numMes = new Map([
  ["01", "enero"],
  ["02", "febrero"],
  ["03", "marzo"],
  ["04", "abril"],
  ["05", "mayo"],
  ["06", "junio"],
  ["07", "julio"],
  ["08", "agosto"],
  ["09", "septiembre"],
  ["10", "ocubre"],
  ["11", "noviembre"],
  ["12", "diciembre"],
]);

//! => 8. Compruebe si el mes número 5 existe en el map e imprima el valor
if (numMes.has("05") == true) {
  // alert(numMes.get("05"));
}

//! => 9. Añade al map una clave con un array como que almacene los meses de verano
numMes.set("verano", ["junio", "julio", "agosto"]);

//! => 10. Crea un array, transformalo a un set y almacenalo en un map
let array = ["Anyela", "novia", "mario", 2];
let setArray = new Set(array);

let mapSet = new Map([["01", setArray]]);
