// Promesas en JS

import { getHeroById } from "../bases/08-imp-exp";

/* En la pila de ejecucion de JS hasta que no acabe de ejecutar
todas las tareas asincronas, se pasara con las tareas asincronas 
como son las promesas */

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2);
//     // resolve(heroe);
//     reject("No se pudo encotrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Data", heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = getHeroById(id);
    setTimeout(() => {
      heroe == undefined
        ? reject("No se encontro el hereoe con: " + id)
        : resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(6).then(console.log).catch(console.warn);
