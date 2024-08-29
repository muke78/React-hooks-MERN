import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const item = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const loading = true;

  const onEditTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        item={item}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
        onEditTodo={onEditTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between align-items-center"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
  });

  test("Debe de mostrar el Todo completado", () => {
    item.done = true;

    render(
      <TodoItem
        item={item}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
        onEditTodo={onEditTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        item={item}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
        onEditTodo={onEditTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(item.id);
  });

  test("button debe de llamar el deleteTodo", () => {
    render(
      <TodoItem
        item={item}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
        onEditTodo={onEditTodoMock}
      />
    );

    const buttonElementDelete = screen.getByLabelText("buttonDelete");
    fireEvent.click(buttonElementDelete);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(item.id);
  });

  test("button debe de llamar el cambio de loading", () => {
    render(
      <TodoItem
        item={item}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
        onEditTodo={onEditTodoMock}
      />
    );

    const buttonElementEdit = screen.getByLabelText("buttonEdit");
    fireEvent.click(buttonElementEdit);
    expect(screen.queryByRole("button", { name: /Editar/i })).toBeNull();
    expect(screen.queryByRole("textbox")).not.toBeNull();
  });
});
