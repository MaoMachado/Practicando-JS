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
// console.log(acomulador);

//! 16. Crea un programa que imprima los números del 1 al 10 usando un bucle for.
for (let index = 1; index <= 10; index++) {
  const element = index;
  // console.log(element);
}

//! 17. Crea un programa que imprima los números pares del 1 al 20 usando un bucle for.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

for (let i = 2; i <= 20; i += 2) {
  // console.log(i);
}

//! 18. Crea un programa que imprima los números impares del 1 al 15 usando un bucle while.
let desde = 1;
while (desde <= 15) {
  // console.log(desde);
  desde += 2;
}

//! 19. Crea un programa que sume todos los números del 1 al 100 usando un bucle for y muestre el resultado en la consola.
let sumaNums = 0;
for (let i = 1; i <= 100; i++) {
  sumaNums += i;
}
// console.log(sumaNums);

//! 20. Crea un programa que calcule y muestre en la consola la tabla de multiplicar del número 7 (desde 1 hasta 10) usando un bucle for.
for (let i = 1; i <= 10; i++) {
  let contTabla = i * 7;
  // console.log(`7 x ${i} = ${contTabla}`);
}

//! 21. Crea un programa que imprima los primeros 10 números de la secuencia de Fibonacci.
let fibA = 0;
let fibB = 1;

for (let i = 3; i <= 10; i++) {
  let sumFib = fibA + fibB;
  // console.log(sumFib);
  fibA = fibB;
  fibB = sumFib;
}

//! 22. Crea un programa que tome un número como entrada y determine si es un número primo.
let numPrimo = 4;
let esPrimo = true;

if (numPrimo < 2) {
  esPrimo = false;
} else {
  for (let i = 2; i < numPrimo; i++) {
    if (numPrimo % i === 0) {
      esPrimo = false;
      break;
    }
  }
}
// console.log(esPrimo);

//! 23. Crea un programa que genere un número aleatorio entre 1 y 100 y permita al usuario adivinarlo mediante un bucle, indicando si el número introducido es mayor o menor al número secreto.
// let numAleatorio = Math.floor(Math.random() * 10) + 1;
// let numAdivinarUser;

// while (numAdivinarUser !== numAleatorio) {
//   numAdivinarUser = parseInt(prompt("Adivina el numero entre 1 y 10: "));

//   if (isNaN(numAdivinarUser)) {
//     // console.log("Por favor ingresa un numero valido");
//     continue;
//   }

//   if (numAdivinarUser < 1 || numAdivinarUser > 10) {
//     // console.log("El numero debe estar entre 1 y 10");
//   }

//   if (numAdivinarUser > numAleatorio) {
//     // console.log("El numero secreto es menor");
//   } else if (numAdivinarUser < numAleatorio) {
//     // console.log("El numero secreto es mayor");
//   } else if (numAdivinarUser === numAleatorio) {
//     // console.log(`Adivinaste el numero secreto es ${numAleatorio}`);
//   } else {
//     // console.log("Por favor, ingresar un numero valido");
//   }
// }

//! 24. Crea un programa que reciba un arreglo de números y determine cuál es el número más grande.
let numeros = [4, 7, 1, 9, 3];
let numMayor = [0];
for (let num of numeros) {
  if (num > numMayor) {
    numMayor = num;
  }
}

let mayorNumReduce = numeros.reduce((mayor, num) =>
  num > mayor ? num : mayor
);

// console.log(`El numero mayor es: ${mayorNumReduce}`);

//! 25. Dado un arreglo de números, encuentra el número más pequeño usando el método reduce.
let numerosMenor = [12, 45, 2, 7, 34];
let numMenor = numerosMenor.reduce((numAcum, num) =>
  num < numAcum ? num : numAcum
);

// console.log(numMenor);

//! 26. Dado un array de números, utiliza el método reduce para crear un nuevo array que contenga solo los números únicos (es decir, elimina los duplicados).
let numeros3 = [4, 7, 4, 3, 9, 7, 1, 3, 4];
let numUnicos = numeros3.reduce((acum, num) => {
  if (!acum.includes(num)) {
    acum.push(num);
  }

  return acum;
}, []);
// console.log(numUnicos);

//! 26. Dado un array de números, escribe un programa que filtre y devuelva un nuevo array con los números que sean mayores a un valor específico (por ejemplo, 10).
let numeros4 = [5, 12, 8, 20, 7, 15];

let filtrarNumFilter = numeros4.filter((num) => num > 10);

let filtrarNumReduce = numeros4.reduce((acum, num) => {
  if (num > 10) {
    acum.push(num);
  }

  return acum;
}, []);

let newArraNums = [];
for (let num of numeros4) {
  if (num > 10) {
    newArraNums.push(num);
  }
}

//! 27. Escribe un programa que sume todos los elementos de un array de números.
let numeros5 = [5, 12, 8, 20, 7, 15];
let sumaArrayReduce = numeros5.reduce((acumSum, num) => acumSum + num);

let sumaAcomulada = 0;
let sumaArrayEach = numeros5.forEach((num) => {
  return (sumaAcomulada += num);
});

console.log(sumaAcomulada);
