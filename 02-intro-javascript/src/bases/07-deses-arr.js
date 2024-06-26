// Desestructuracion de arreglos

const personaje = ['Tanjiro', 'Zenitsu', 'Mitsuri'];
const [, , p3] = personaje;
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
const valueState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }]
};
// En la desestructuracion se puede mandar a traer el nombre del metodo 
const [nombre, setNombre] = valueState('Inoske');

console.log(nombre);
setNombre();

