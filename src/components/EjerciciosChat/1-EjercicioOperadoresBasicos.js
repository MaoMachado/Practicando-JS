//! 1. Crea un programa que sume dos números dados y muestre el resultado en la consola.

let a = 2;
let b = 5;
//console.log(a + b);

//! 2. Crea un programa que reste dos números y muestre el resultado en la consola.
//console.log(a - b);

//! 3. Crea un programa que multiplique dos números y muestre el resultado en la consola.
let c = 5;
let d = 8;
// console.log(c * d);

//! 4. Crea un programa que divida dos números y muestre el resultado en la consola.
let e = 10;
let f = 2;
// console.log(e / f);

//! 5. Crea un programa que calcule el resto de dividir dos números y muestre el resultado en la consola.
a = 8;
b = 16;
// console.log(b % a);

//! 6. Crea un programa que realice una operación combinada con suma, resta, multiplicación y división
let g = 10;
let h = 5;
let i = 3;
let j = 2;
let k = 4;
let res = (g + h - i) * (j / k);
// console.log(res);

//! 7. Crea un programa que eleve un número al cuadrado y otro al cubo, mostrando ambos resultados en la consola.
let l = 4;
let cuadrado = l ** 2;
let cubo = l ** 3;
// console.log(cuadrado);
// console.log(cubo);

//! 8. Crea un programa que reciba dos números y los intercambie sin utilizar una variable temporal.
let m = 3;
let n = 7;
m = m + n;
n = m - n;
m = m - n;
// console.log(m, n);

//! 9. Crea un programa que determine si un número es par o impar
let ñ = 1;
if (ñ % 2 === 0) {
  // console.log("El numero es par");
} else {
  // console.log("El numero es impar");
}

//! 10. Crea un programa que determine si un número dado está dentro de un rango, por ejemplo, entre 10 y 20.
let numRango = 10;
if (numRango >= 10 && numRango <= 20) {
  // console.log("El número esta entre los números 10 y 20");
} else {
  // console.log("El número esta fuera del rango");
}

//! 11. Crea un programa que determine si es positivo, negativo o cero. Muestra el resultado en la consola.
let num = 0;
if (num === 0) {
  // console.log("El número es cero");
} else if (num < 0) {
  // console.log("El número es negativo");
} else {
  // console.log("El número es positivo");
}

//! 12. Crea un programa que pida al usuario dos números y muestre cuál es el mayor de los dos. Si son iguales, muestra un mensaje indicando que los números son iguales.
let numUser1 = 6;
let numUser2 = 4;
if (numUser1 === numUser2) {
  // console.log("Los numeros son iguales");
} else if (numUser1 > numUser2) {
  // console.log(
  //   `El número del usuario1: ${numUser1}, es mayor al del usuario2: ${numUser2}`
  // );
} else {
  // console.log(
  //   `El número del usuario2: ${numUser2} es mayor al del usuario1: ${numUser1}`
  // );
}

//! 13. Crea un programa que calcule el área de un triángulo, dados su base y su altura.
let base = 15;
let altura = 6;

let calcArea = (base * altura) / 2;
// console.log(calcArea);

//! 14. Crea un programa que convierta grados Celsius a grados Fahrenheit.
let celcuis = 25;

let fahrenheit = celcuis * (9 / 5) + 32;
// console.log(fahrenheit);

//! 15. Crea un programa que pida al usuario un número y calcule su factorial. (El factorial de un número n es el producto de todos los enteros desde 1 hasta n).
let numFac = 5;
let lista = 1;
let acomulador = 1;
while (numFac >= lista) {
  acomulador = acomulador * numFac;
  numFac--;
}
console.log(acomulador);

for (let i = 5; i <= 1; i--) {
  console.log("num", i);
}
