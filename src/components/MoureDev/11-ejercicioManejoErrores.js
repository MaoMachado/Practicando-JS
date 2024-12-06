//! 1. Captura una excepción utilizando try-catch
try {
  // console.log("Se ejecuto", nombre);
} catch (e) {
  // console.log("Error: ", e.message);
}

//! 2. Captura una excepción utilizando try-catch y finally
try {
  // console.log("Se ejecuto correctamente");
} catch (error) {
  // console.log(e.message);
} finally {
  // console.log("Finalizado");
}

//! 3. Lanza una excepción genérica
// throw new Error("Se ha producido un error");

//! 4. Crea una excepción personalizada
function sumaInteger(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Esta operacion solo suma numeros");
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operacion solo suma numeros enteros");
  }

  if (a == 0 || b == 0) {
    throw new MiError("Se esta intentado sumar ceros", a + b);
  }
}

class MiError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  imprimirPantalla() {
    console.log(`${this.a} + ${this.b}`);
  }
}

//! 5. Lanza una excepción personalizada
try {
  console.log(sumaInteger(0, 10));
} catch (error) {
  console.log("Se ah producido un error personalizado: ", error.message);
  error.imprimirPantalla();
}

//! 6. Lanza varias excepciones según una lógica definida
class ValorInvalidoError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValorInvalidoError";
  }
}

class DivisionPorCeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionPorCeroError";
  }
}

function calcular(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new ValorInvalidoError("Uno o ambos valores no son números");
  }
  if (b === 0) {
    throw new DivisionPorCeroError("No se puede dividir por cero");
  }
  return a / b;
}

// 7. Captura varias excepciones en un mismo try-catch
try {
  console.log(calcular(10, 2)); // Salida: 5
  console.log(calcular(10, "2")); // Esto lanzará una excepción ValorInvalidoError
  console.log(calcular(10, 0)); // Esto lanzará una excepción DivisionPorCeroError
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
