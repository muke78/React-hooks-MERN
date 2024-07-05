import { getSaludo } from "../../base-pruebas/02-template-string";


describe("Pruebas en el 02-template-string", () => {
  test('getSaludo debe de retornar "Hola erick', () => {
    const name = "Erick";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
