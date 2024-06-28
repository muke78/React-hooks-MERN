// Operador condicional ternario en JS

const activo = true;

// Forma comun de hacer la condicion
// let mensaje = "";

// if (activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

// console.log(mensaje)

// Forma con el operador ternario
const mensaje = activo ? "Activo" : "Inactivo";
// const mensaje = activo ? "Activo" : null;

// Cuando solo tienes que validar un solo parametro

const mensajeUnparemtro = activo && "Activo";

console.log(mensajeUnparemtro);
