var a = 5;
var b = 8;

//! Crea una variables para cada operacion aritmetica
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let exponente = a ** b;

//! 2. Crea una variable para cada tipo de operacion de asignación, que haga uso de las variables utilizadas para las operaciones aritmeticas
suma += 2;
resta -= 2;
multiplicacion *= 2;
division /= 2;
modulo %= 2;
exponente ** 2;

//! 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(resta < suma);
console.log(suma > resta);
console.log(division < multiplicacion);
console.log(modulo < exponente);
console.log(resta < !multiplicacion);

//! 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(modulo >= division);
console.log(exponente <= division);
console.log(!exponente >= multiplicacion);
console.log(!suma == suma);
console.log(multiplicacion == exponente);

//! 5. Utiliza el operador logico And
let operadorAnd = modulo > division && suma < resta;

//! 6. Utiliza el operador logico Or
let operadorOr = exponente < division || !multiplicacion > suma;

//! 7. Combina ambos operadores
let ambosOperadores =
  (modulo > division && suma < resta && exponente < division) ||
  !multiplicacion > suma;

//! 8. Añade alguna negación
let negacion = !suma && suma;

//! 9. Utiliza el operador ternario
let operadorTernario = suma > resta ? true : false;

//! 10. Combina operadores aritmeticos, de comparacion y logicos
let combinación =
  suma - resta > modulo &&
  exponente < multiplicacion + modulo + division + resta + suma;
