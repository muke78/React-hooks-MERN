import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const title = "Hola, soy  Erick";
    const subtitle = "Hola soy un subtitulo";
    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    
    // expect(container).toMatchSnapshot(); 
  });
});

