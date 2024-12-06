// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

//! 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
  return a + b;
}
let resultadoSuma = suma(3, 2);
// console.log("La suma es: ", resultadoSuma);

//! 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const numMayorArray = function (array) {
  let numMayor = array[0];
  for (let num of array) {
    if (num > numMayor) {
      numMayor = num;
    }
  }
  return numMayor;
};

// console.log(numMayorArray([2, 4, 6, 8, 10, 1, 3, 5, 7, 9]));

//! 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const numVocales = (string) => {
  let vocales = 0;
  for (let i of string) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      vocales++;
    }
  }
  return `El texto tiene ${vocales} vocales`;
};

let resultadoVocales = numVocales("Este texto tiene vocales");
// console.log(resultadoVocales);

//! 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function arrayMayusculas(array) {
  let stringMayusculas = array.map((str) => str.toUpperCase());
  return stringMayusculas;
}
let resArrayMayus = arrayMayusculas(["mario", "anyela"]);
// console.log(resArrayMayus);

//! 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const numPar = function (num) {
  if (num < 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const resPrimo = numPar(6);
// console.log(resPrimo);

//! 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function arrayComunes(array1, array2) {
  let eleComunes = array1.filter((value) => array2.includes(value));
  return eleComunes;
}
// console.log(arrayComunes([1, 2, 3, 4], [3, 4, 5, 6]));

//! 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaPares = (array) => {
  let suma = 0;
  for (let num of array) {
    if (num % 2 === 0) {
      suma += num;
    }
  }
  return suma;
};
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sumaPares(numeros));

//! 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function arrayCuadrados(array) {
  let cuadrados = array.map(function (num) {
    return num ** 2;
  });

  return cuadrados;
}

// console.log(arrayCuadrados([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//! 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let stringInverso = (string) => {
  let reverseString = string.split("").reverse().join("");
  return reverseString;
};

// console.log(stringInverso("Mario"));

//! 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(6));
