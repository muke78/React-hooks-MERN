import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "Hola, soy Erick";
  const subtitle = "Hola soy un subtitulo";

  test("Debe de hacer la prueba con el snapshot", () => {
    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Erick"', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(3);
  });
});

/**
 * El metodo toMatchSnapshot se encarga de tomar una muestra
 * del codigo original creando un componmente de html basico
 * que lo almacenara en una carpeta nueva dentro de donde
 * estamos haciendo las pruebas __snapshots__ con un archivo
 * FirstApp.test.jsx.snap, al momento de hascer modificaciones
 * en el codigo original, dara un error, porque la captura que
 * hay no fue igual a lo nuevo que el llego
 */

/**
 * toBeTruthy que se encuntre lo que se esta buscando
 *
 * toContain compara el contenido que se encuntra dentro
 * de una estructura de datos o de esquema sin importar
 * espacios o algo que influya en su contenido
 */

/**
 * Ver lo que se esta renderizando en el componente
 * screen.debug();
 */
