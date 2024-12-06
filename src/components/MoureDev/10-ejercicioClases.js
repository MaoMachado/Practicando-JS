//! 1. Crea una clase que reciba dos propiedades
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

//! 2. Añade un método a la clase que utilice las propiedades
class Persona1 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  info() {
    console.log(`Nombre: ${this.nombre}. Apellido: ${this.apellido}`);
  }
}

//! 3. Muestra los valores de las propiedades e invoca a la función
let persona1 = new Persona1("Mario", "Machado");
persona1.info();

//! 4. Añade un método estático a la primera clase
Persona.suma = function (a, b) {
  return a + b;
};

//! 5. Haz uso del método estático
console.log(Persona.suma(2, 2));

//! 6. Crea una clase que haga uso de herencia
class Caracteristicas extends Persona1 {
  constructor(nombre, apellido, edad, altura) {
    super(nombre, apellido);
    this.edad = edad;
    this.altura = altura;
  }
}

let persona2 = new Caracteristicas("Mario", "Machado", 32, 179);
console.log(persona2);

//! 7. Crea una clase que haga uso de getters y setters
class Info {
  #id;
  #codigo;

  constructor(id, codigo) {
    this.#id = id;
    this.#codigo = codigo;
  }

  get id() {
    return this.#id;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(newCodigo) {
    this.#codigo = newCodigo;
  }
}

//! 8. Modifica la clase con getters y setters para que use propiedades privadas
let info1 = new Info(0o1, 8285);
info1.codigo = 1991;

//! 9. Utiliza los get y set y muestra sus valores
console.log(info1.codigo);
console.log(info1.id);

//! 10. Sobrescribe un método de una clase que utilice herencia
class Persona3 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  info() {
    console.log("Camninando");
  }
}

class Caminar extends Persona3 {
  info() {
    super.info();
  }
}

let person = new Caminar();
person.info();
