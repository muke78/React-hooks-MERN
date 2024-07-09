import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "Hola, soy Erick";
  //   const subtitle = "Hola soy un subtitulo";
  //   const name = "Soy un nombre";
  //   const { container } = render(
  //     <FirstApp title={title} subtitle={subtitle} name={name} />
  //   );

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe mostrar el titulo en un h1", () => {
    const title = "Hola, soy Erick";
    const subtitle = "Hola soy un subtitulo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getByText(title, subtitle)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Erick";
    const subtitle = "Hola soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(3);
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
