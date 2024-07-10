import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en <CounterAppTemplate/>", () => {
  const value = 100;
  const initialValue = 10;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={0} />);
    expect(container).toMatchSnapshot();
  });

  test(`Debe de mostrar el valor inicial de ${value}`, () => {
    render(<CounterApp value={value} />);
    expect(value).toBe(value);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
    screen.debug();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
    screen.debug();
  });

  test("Debe de funcionar le boton de reset", () => {
    render(<CounterApp value={initialValue} />);
    // fireEvent.click(screen.getByText("Reset"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
