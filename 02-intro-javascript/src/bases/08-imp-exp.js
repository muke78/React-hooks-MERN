//Importacioners en JS




/** Cuando la importacion es por defecto no necesita las llaves, pero 
cuando no es por defecto se le pone llaves para acceder a el nombre que lleva*/
import heroes, { owner } from "../data/heroes";

export const getHeroById = (id) => {
    return heroes.find((element) => element.id === id)
};

// console.log(getHeroById(2))

export const getHeroesByOwner = (owner) => {
    return heroes.filter((element) => element.owner === owner)
};

// console.log(getHeroesByOwner('DC'))

// console.log(owner);

