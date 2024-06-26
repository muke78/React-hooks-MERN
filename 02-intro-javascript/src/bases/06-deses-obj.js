// Desestructuracion
// Asignacion Desestructurante

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

// const { nombre, apellido, edad } = persona;


// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);

const getPersona = ({ nombre, edad, rango = 'Programador' }) => {
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.211234245,
            lng: -99.3421432,
        }
    }
}

const { nombreClave, anios, latlng } = getPersona(persona);

//O se puede hacer de la siguiente manera
// const { lat, lng } = latlng;

console.log(anios, nombreClave, lat, lng)
