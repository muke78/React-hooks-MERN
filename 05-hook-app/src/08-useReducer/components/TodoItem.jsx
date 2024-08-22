import { useState } from "react";
import { TodoEdit } from "./TodoEdit";

export const TodoItem = ({ item, onEditTodo, onDeleteTodo, onToggleTodo }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isLoading ? (
        <span
          className={`align-self-center ${
            item.done ? "text-decoration-line-through" : ""
          }`}
          role="button"
          onClick={() => onToggleTodo(item.id)}
        >
          {item.description}
        </span>
      ) : (
        <TodoEdit
          item={item}
          setIsLoading={setIsLoading}
          onEditTodo={onEditTodo}
        />
      )}

      <div className="ms-auto">
        <button
          className="btn btn-primary me-2"
          onClick={() => setIsLoading(!isLoading)}
        >
          Editar
        </button>
        <button
          className="btn btn-danger right"
          onClick={() => onDeleteTodo(item.id)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};
