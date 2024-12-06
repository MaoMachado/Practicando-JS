//! 1. Crea una función que utilice error correctamente
function error() {
  throw new Error("Conexion Fallida");
}

try {
  error();
} catch (error) {
  console.error("Se ha producido un error: ", error.message);
}

//! 2. Crea una función que utilice warn correctamente
function warn() {
  let conexionEstablecida = false;

  if (!conexionEstablecida) {
    console.warn("Advetencia: Conexion Fallida");
  }
}

warn();

//! 3. Crea una función que utilice info correctamente
function info() {
  let mostrandoInfo = true;

  if (mostrandoInfo) {
    console.info("Info Adiocional");
  }
}

info();

//! 4. Utiliza table
let data = [
  ["Mao", 32],
  ["Anyi", 22],
];

let data1 = [
  { name: "Mario", edad: 32 },
  { name: "Anyi", edad: 22 },
];
console.table(data);
console.table(data1);

//! 5. Utiliza group
console.group("Usuarios:");
console.log("Nombre: Mario");
console.log("Edad: 32");
console.groupEnd();

//! 6. Utiliza time
console.time("Tiempo de ejecución");
for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecución");

//! 7. Valida con assert si un número es positivo
let numPos = -1;

console.assert(numPos > 0, "El numero no es positivo");

//! 8. Utiliza count
console.count("Click");
console.count("Click");
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("click");

//! 9. Utiliza trace
function FunA() {
  FunB();
}

function FunB() {
  console.trace("Seguimiento de la ejecucion");
}

FunA();

//! 10. Utiliza clear
console.clear();
