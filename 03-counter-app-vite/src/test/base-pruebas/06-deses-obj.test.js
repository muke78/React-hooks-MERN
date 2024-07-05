import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en  06-deses-obj", () => {
  test("usContext debe retornar un objeto conm desestructuracion del metodo ocupado ", () => {
    const clave = "013225FDF12";
    const edad = 12;
    const { latlng: { lat, lng } } = usContext(clave, edad);
  
    const objetoUsContext = usContext({ clave, edad });

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
