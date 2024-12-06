//! 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Mao";
if (nombre == "Mao") {
  console.log(nombre);
}

//! 2. Imprime por consola un mensaje si el usuario y contraseña coindicen con lo establecido
let usuario = "MarioMachado";
let contraseña = "Mao-";
let msg;
if (usuario.length > 11 && contraseña.length > 7) {
  msg = "Usuario y Contraseña correctas";
} else {
  msg = "El usuario o la contraseña son incorrectos";
}
console.log(msg);

//! 3. Verifica si un numero es positivo, negativo o cero e imprime el mensaje
let num = 0;
if (num < 0) {
  console.log(`El numero ${num} es negativo`);
} else if (num === 0) {
  console.log(`El numero ${num} es cero`);
} else {
  console.log(`Èl numero ${num} es positivo`);
}

//! 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le fatan
let edadVotar = 8;
let mayorEdad = 18;
if (edadVotar >= 18) {
  console.log("Puede votar, usted tiene " + edadVotar + " años");
} else {
  console.log(
    `No puede votar, le faltan ${mayorEdad - edadVotar} años para poder votar`
  );
}

//! 5. Usa el operador ternario para asignar el valor 'Adulto' o 'Menor' a una variable dependiendo de la edad
let edad = 18;
const estableceMadures = edad >= 18 ? "Adulto" : "Menor";
console.log(estableceMadures);

//! 6. Muestra en que estacion del año nos encontramos dependiendo de una variable 'mes'
let mes = "primavera";
if (mes == "primavera") {
  console.log(`Estación del año actual es ${mes}`);
} else if (mes == "verano") {
  console.log(`Estación del año actual es ${mes}`);
} else if (mes == "otoño") {
  console.log(`Estación del año actual es ${mes}`);
} else if (mes == "invierno") {
  console.log(`Estación del año actual es ${mes}`);
} else {
  console.log("No es una estación del año");
}

//! 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejericicio anterior
if (mes == "primavera") {
  console.log(
    `El mes ${mes} comprende parte del mes de marzo, los meses de abril y mayo en su totalidad, y parte de junio`
  );
} else if (mes == "verano") {
  console.log(
    `el mes ${mes} forma parte de los últimos 9-10 días de junio, todo julio y agosto, y parte de septiembre`
  );
} else if (mes == "otoño") {
  console.log(
    `El mes ${mes} se compone de parte de septiembre, octubre y noviembre al completo, y parte de diciembre.`
  );
} else if (mes == "ivierno") {
  console.log(
    `El mes ${mes} comprende desde el 21-22 de diciembre hasta el 19 o 20 de marzo.`
  );
} else {
  console.log(`Estación incorrecta`);
}

//! 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "chino";
switch (idioma) {
  case "esp":
    console.log("Que pasa bro");
    break;

  case "ing":
    console.log("Whatsapp Men");
    break;

  case "alm":
    console.log("Hallo, freund");
    break;

  case "chino":
    console.log("朋友你好");
    break;

  default:
    break;
}

//! 9. Usa un switch para hacer de nuevo el ejercicio 6
let estacion = "primavera";

switch (estacion) {
  case "primavera":
    console.log(`La estación del año es ${estacion}`);
    break;

  case "verano":
    console.log(`La estación del año es ${estacion}`);
    break;

  case "otoño":
    console.log(`La estación del año es ${estacion}`);
    break;

  case "invierno":
    console.log(`La estación del año es ${estacion}`);
    break;

  default:
    console.log(`${estacion} no es una estación`);

    break;
}

//! 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (estacion) {
  case "primavera":
    console.log(
      `El mes ${mes} comprende parte del mes de marzo, los meses de abril y mayo en su totalidad, y parte de junio`
    );
    break;

  default:
    break;
}
