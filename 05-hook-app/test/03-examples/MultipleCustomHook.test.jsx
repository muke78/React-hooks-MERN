import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHook/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHook />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Informacion de Pokemon"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default: "front_default",
          front_shiny: "front_shiny",
          back_default: "back_default",
          back_shiny: "back_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);

    expect(screen.getByText("#1 - bulbasaur")).toBeTruthy();
    expect(screen.getAllByRole("img", { src: "front_shiny" }));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          front_default: "front_default",
          front_shiny: "front_shiny",
          back_default: "back_default",
          back_shiny: "back_shiny",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
