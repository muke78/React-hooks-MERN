// Arreglos en javascript

//Otra forma ded hacerlo solo si son valores fijos uanque no se recomienda
// const arregloViejo = new Array(100);

//Forma actual
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arreglo2 = [...arreglo, 50000]


//Esto es una funcion dentro de este metodo llamada callback
const arreglo3 = arreglo2.map(function (numero) {
    if (numero % 2 === 1) {
        return `Es impar ${numero}`
    } else {
        return `Es par ${numero}`
    }
});

// Se podria hacer de esta manera tambien
// const arreglo4 = arreglo2.map(numero => numero % 2 === 1 ? `Es impar ${numero}` : `Es par ${numero}`)

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
// console.log(arreglo4);


