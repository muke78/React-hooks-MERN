//Objetos literales

const persona = {
    nombre: 'Erick',
    apellido: 'Gonzalez',
    edad: 23,
    direccion: {
        numeroCasa: 16,
        nombreCalle: 'Bugambilias',
        personasDentro: {
            persona1: 'Erick',
            persona2: 'Daires',
            persona3: 'Carmen',
            persona4: 'Miguel',

        }
    }
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Mary'
console.log(persona);
console.log(persona2)
