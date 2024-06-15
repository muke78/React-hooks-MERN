const nombre = "Erick";
const apellido = "Gonzalez";

//Uso normal de concatenacion
const nombreCompleto = nombre + " " + apellido;

//Uso de templates string
const nombreCom = `${nombre} ${apellido} `;

console.log(nombreCom);
getSaludo(nombreCom);


function getSaludo(p) {
    return `Hola ${p}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)