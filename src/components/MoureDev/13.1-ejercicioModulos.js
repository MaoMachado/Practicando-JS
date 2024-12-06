import resta, { Persona, PI, suma } from "./13-ejercicioModulos.js";

export function multi(a, b) {
  return a * b;
}

export const nombre = "mario";

export default function restaDefautl(a, b) {
  return a - b;
}

export default class Objeto{
  constructor(nombre) {
    this.nombre = nombre
  }
}