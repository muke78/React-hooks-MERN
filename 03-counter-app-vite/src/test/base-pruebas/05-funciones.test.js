import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Erick";
    const user = getUsuarioActivo(name);
    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});

/**
 * En la compracion de objetos puede que de error al querer
 * ejecutar un `toBe` en la expresion de jest, ya que
 * los objetos ocupan diferente espoacio en memoria haciendo
 * difil su compacion entre uno y otro asi que se ocupa la funcion
 * `toStrictEqual`
 */
