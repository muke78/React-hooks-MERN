import { render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en <CounterAppTemplate/>", () => {
  const value = 100;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={0} />);
    expect(container).toMatchSnapshot();
  });

  test(`Debe de mostrar el valor inicial de ${value}`, () => {
    render(<CounterApp value={value} />);
    expect(value).toBe(value);
    expect(screen.getByText(value)).toBeTruthy();
    screen.debug();
  });
});
