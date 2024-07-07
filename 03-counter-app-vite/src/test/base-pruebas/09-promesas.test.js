import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe obtener un error si heroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el heroe ${id}`);
      done();
    });
  });
});

describe("Pruebas con promesas", () => {
  test("getHeroesByIdAsync debe retornar un heroe", () => {
    const id = 1;
    return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);
  });

  test("Debe de obtener un error si el heroe por id no existe", () => {
    const id = 100;
    return expect(getHeroeByIdAsync(id)).rejects.toBe(
      `No se pudo encontrar el heroe ${id}`
    );
  });
});
