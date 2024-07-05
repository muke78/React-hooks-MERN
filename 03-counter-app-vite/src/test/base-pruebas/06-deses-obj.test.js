import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en  06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const clave = "013225FDF12";
    const edad = 12;
    const lat = 14.1232;
    const lng = -12.3232;
    const objetoUsContext = usContext({ clave, edad, latlng: { lat, lng } });

    expect(objetoUsContext).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: lat,
        lng: lng,
      },
    });
  });
});
