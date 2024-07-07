import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Prueba en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    //El toBeFalsy evaluya si lo que queremos comparar llega vacio o indefinido
    expect(hero).toBeFalsy();
  });

  /**
   * getHeroesByOwner
   * Debe de retornar un arreglo con los heroes de DC
   * El tamaño del objeto debe de ser 3 { length === 3 }
   * toEqual del arreglo filtrado
   *
   * --------------
   *
   * Debe de retornar un arreglo con los heroes de Marvel
   * El tamaño del objeto debe de ser 2 { length === 2 }
   */
  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const callBackOwner = getHeroesByOwner(owner);

    expect(callBackOwner.length).toBe(3);
    expect(callBackOwner).toHaveLength(3);
    expect(callBackOwner).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    
    expect(callBackOwner).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });

  test("Debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const callBackOwner = getHeroesByOwner(owner);

    /**
     *  El toHaveLength se ocupa para medir el corrido del arreglo segun
     * objetos que contenga
     * */

    expect(callBackOwner.length).toBe(2);
    expect(callBackOwner).toHaveLength(2);
    expect(callBackOwner).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);

    expect(callBackOwner).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });
});

describe("Prueba 08-imp-exp con expresiones de igualdad simples", () => {
  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const callBackOwner = getHeroesByOwner(owner);
    /**
     *  El toHaveLength se ocupa para medir el recorrido del arreglo segun
     * objetos que contenga
     * */

    expect(callBackOwner).toHaveLength(3);
    expect(callBackOwner).toEqual(getHeroesByOwner(owner));
  });

  test("Debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const callBackOwner = getHeroesByOwner(owner);
    console.log(callBackOwner);

    /**
     *  El toHaveLength se ocupa para medir el recorrido del arreglo segun
     * objetos que contenga
     * */

    expect(callBackOwner).toHaveLength(2);
    expect(callBackOwner).toEqual(getHeroesByOwner(owner));
  });
});
