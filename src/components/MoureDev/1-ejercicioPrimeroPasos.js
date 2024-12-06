//! 1. Escribe un comentario en una linea
/**
 * Este es un comentario en una linea
 */

//! 2. Escribe un comentario en varias lineas
/**
 * Esto
 * Es
 * Un
 * Comentario
 * En
 * Varias
 * Lineas
 */

//! 3. Declara variables con valores asociados a todos los datos primitivos
var strign = "Mao";
var number = 8;
var bigInt = BigInt(888888888888888888888888888888888888888888888888);
var boolean = false;
var nullValue = null;
var undefined;
var symbol = Symbol("Mao");

//! 4. Imprime por consola el valor de todas las variables
console.log(strign);
console.log(number);
console.log(bigInt);
console.log(boolean);
console.log(nullValue);
console.log(undefined);
console.log(symbol);

//! 5. Imprime por consola el tipo de todas las variables
console.log(typeof strign);
console.log(typeof number);
console.log(typeof bigInt);
console.log(typeof boolean);
console.log(typeof nullValue);
console.log(typeof undefined);
console.log(typeof symbol);

//! 6. Modifica el valor de las variables por otros del mismo tipo
strign = "Anyi";
number = 22;
bigInt = BigInt(99999999999999999999999999999999999999999999999);
boolean = true;
nullValue = !null;
undefined;
symbol = Symbol("Anyela");

//! 7. Modifica el valor de las variables por otros de distinto tipo
strign = false;
number = "Mao";
bigInt = BigInt(true);
boolean = "true";
nullValue = 88;
undefined = Symbol(22);
symbol = true;

//! 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
// const string = "Mao";
// const number = 22;
// const bigInt = BigInt(21212112121212121212121212121212121221212);
// const boolean = true;
// const nullValue = null;
// const undefined = undefined;
// const symbol = Symbol("Anyi");

//! 9. Modifica los valores de las constantes
console.log((string = "Anyi"));
console.log((number = 32));
console.log((bigInt = BigInt(6565656565656565656565656656)));
console.log((boolean = false));
console.log((nullValue = !null));
console.log((undefined = 1));
console.log((symbol = Symbol("Mao")));

//! 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
/**
 * Las lineas de las 63 a la 69 dan error porque las constantes no se le puede modificar su valor o tipo
 */
