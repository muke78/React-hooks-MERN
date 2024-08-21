export const TodoItem = ({ item, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`align-self-center ${
          item.done ? "text-decoration-line-through" : ""
        }`}
        role="button"
        onClick={() => onToggleTodo(item.id)}
      >
        {item.description}{" "}
      </span>
      <div className="ms-auto">
        <button className="btn btn-primary me-2">Editar</button>
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
