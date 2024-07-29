import { getGifts } from "../../src/helpers/getGifts";

describe("Pruebas en getGifts()", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifts("One Puch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
});

/**
 *  toBeGreaterThan sirve para que sea mayor de cero esto nos sirve
 * aqui para checar si nuestra respuesta de API si devolvio un valor
 */
