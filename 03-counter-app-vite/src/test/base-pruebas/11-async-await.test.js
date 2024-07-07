import { getImagen } from "../../base-pruebas/11-async-await";

describe("Prueba 11-async-await", () => {
  test("getImagen debe de retornar un url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toEqual("string");
  });
});
