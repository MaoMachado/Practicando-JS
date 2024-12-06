//! 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  // console.log(`Numero: ${i}`);
}

//! 2. Cra un buycle que sume todos los número del 1 al 100 y muestre el resultado
let suma = 1;
let sumaTotal = 0;
while (suma <= 100) {
  sumaTotal = sumaTotal + suma;
  suma++;
}
// console.log(sumaTotal);

//! 3. Crea un bucle que imprima todos los numero pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//! 4. Dado un array de nombre, usa un bucle para imprimir cada nombre en la consola
let nombres = ["mario", "anyela", "angelica", "ivan", "lizeth", "ramon"];

for (let nombre of nombres) {
  // console.log(nombre);
}
//! 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Cadena de texto, sacando vocales";
let vocales = "";
for (let i of texto) {
  if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
    vocales += i;
  }
}
// console.log(vocales.length);

//! 6. Dado un array de números, usa un bucle para multiplicar todos los números y muestre el producto
let arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let multTotal = 1;
for (let i = 0; i < arrayNumero.length; i++) {
  const element = arrayNumero[i];
  multTotal = multTotal * element;
}
// console.log(multTotal);

multTotal = arrayNumero.reduce((acc, num) => acc * num, 1);
// console.log(multTotal);

//! 7. Escriba un bucle que imprima la tabla de multiplicar del 5
let numMulti = 5;
let inicio = 1;
while (inicio <= 10) {
  let resultado = 1;
  resultado = inicio * numMulti;
  // console.log(resultado);
  inicio++;
}

//! 8. Usa un bucle para inverir una cadena de texto
let invertirTexto = "Mario";
let cadenaInvertida = "";
for (let i = invertirTexto.length - 1; i >= 0; i--) {
  cadenaInvertida += invertirTexto[i];
}
// console.log(cadenaInvertida);

//! 9. Usa un bucle para generar los primeros 10 números de la secuencia Fibonacci
let num = 10;
const fib = [0, 1];
for (let i = 2; i < num; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

// console.log(fib);

//! 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numarrays = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
let newNumArrays = [];
for (let i = 0; i < numarrays.length; i++) {
  if (numarrays[i] > 10) {
    newNumArrays.push(numarrays[i]);
  }
}
console.log(newNumArrays);
