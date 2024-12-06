import { multi, nombre } from "./13.1-ejercicioModulos.js";

import restaDefautl from "./13.1-ejercicioModulos.js";

//! 1. Exporta una función
export function suma(a, b) {
  return a + b;
}

//! 2. Exporta una constante
export const PI = 3.14156;

//! 3. Exporta una clase
export class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  info() {
    console.log(this.nombre, this.apellido);
  }
}

//! 4. Importa una función
// console.log(multi(5, 2));

//! 5. Importa una constante
// console.log(nombre);

//! 6. Importa una clase
// let persona1 = new Persona("Mario", "Machado");
// console.log(persona1);
// persona1.info();

//! 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function resta(a, b) {
  return a - b;
}

export default class Objeto{
  constructor(nombre) {
    this.nombre = nombre
  }
}

//! 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
console.log(restaDefautl(5, 2));


// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
