import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("Debe de retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    //Que reciba cualaquier tipio de string
    expect(letters).toEqual(expect.any(String));
  });
});

/**
 * El toBe tambien tiene la capácidad de poder
 * evaluar el tipo de dato que se envia, si se
 * envia un number no se puede recibir como
 * string
 */
