//Funciones en JS

//Funcion cotidiana
const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

//Funcion con arrow
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

//Funcion simplificada cuando es una linea
const saludar3 = (nombre) => `Hola, ${nombre}`



console.log(saludar('Erick'))
console.log(saludar2('Mary'))
console.log(saludar3('Canelito'))

//Funcion implicita
const getUser = () => ({
    uid: 'DJMDN8237',
    username: 'Muke78'
})

const user = getUser();

console.table(user);

//Tarea
// 1. Transformar en una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebalo
const getUsuarioActivo = (nombre) => ({
    uid: "384UJNM",
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Mukesito');
console.log(usuarioActivo)



// function getUsuarioActivo(nombre) {
//     return {
//         uid: "384UJNM",
//         username: nombre

//     }
// };

// const usuarioActivo = getUsuarioActivo('Carmen');
// console.log(usuarioActivo)

