//Es la función más común y se utiliza para imprimir mensajes informativos en la consola.
const variable = 5;
console.log("El valor de la variable es:", variable);

//Se usa para imprimir mensajes de error. Los navegadores suelen destacar estos mensajes en rojo para indicar su gravedad.
console.error("Este es un mensaje de error");


//Sirve para mostrar advertencias. Los navegadores suelen usar un color amarillo o naranja.
console.warn("Esta es una advertencia");


//Es similar a console.log(), pero se usa para mensajes informativos. Algunos navegadores los muestran con un icono especial.
console.info("Información adicional");

//Funciona de manera similar a console.log() y se usa para mensajes de depuración
console.debug("Este es un mensaje de depuración");

//Permite mostrar datos en forma de tabla, lo que es muy útil para visualizar matrices y objetos.
let data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Carol", age: 35 }
];
console.table(data);

//Se usan para agrupar mensajes en la consola, creando un bloque que se puede expandir o contraer.
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

//Es similar a console.group(), pero el grupo empieza colapsado.
console.groupCollapsed("Grupo colapsado");
console.log("Mensaje dentro del grupo");
console.groupEnd();

//Se utilizan para medir el tiempo de ejecución de un bloque de código.
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
    // Simulación de tarea pesada
}
console.timeEnd("Tiempo de ejecución");

//Se usa para mostrar un mensaje de error si una condición es falsa.
let x = 5;
console.assert(x > 10, "El valor de x no es mayor que 10");


//Cuenta cuántas veces se ha llamado a console.count() con la misma etiqueta.
console.count("Llamada");
console.count("Llamada");
console.count("Llamada");
console.count("Llamada");
console.count("Otra llamada");
console.count("Otra llamada");

//Limpia todos los mensajes en la consola.
// console.clear();

//Muestra un seguimiento de pila (stack trace), que es útil para rastrear la ejecución de funciones.
function myFunction() {
    console.trace("Seguimiento de pila");
}
myFunction();