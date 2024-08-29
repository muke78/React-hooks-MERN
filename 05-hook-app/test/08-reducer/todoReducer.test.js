import { act, renderHook } from "@testing-library/react";
import { todoReducer } from "../../src/08-useReducer/todoReducer";
import { useTodos } from "../../src/hooks/useTodos";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de editar un todo", () => {
    const replaceDescription = "Soy un texto editado";

    const action = {
      type: "[TODO] Edit Todo",
      payload: {
        id: 1,
        description: replaceDescription,
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toContain(action.payload);
    expect(action.payload.description).toBe("Soy un texto editado");
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).toEqual(newState);
  });

  test("Debe de realizar el toggle del todo", () => {
    // El done tiene que cambiar de su estado false a true o viceversa

    const action = {
      type: "[TODO] Toggle todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
